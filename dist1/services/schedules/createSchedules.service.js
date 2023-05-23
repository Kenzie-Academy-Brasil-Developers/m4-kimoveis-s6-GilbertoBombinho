"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createScheduleService = void 0;
const entities_1 = require("../../entities");
const data_source_1 = require("../../data-source");
const error_1 = require("../../error");
const createScheduleService = (scheduleData, tokenId) => __awaiter(void 0, void 0, void 0, function* () {
    const realEstateRepository = data_source_1.AppDataSource.getRepository(entities_1.RealEstate);
    const scheduleRepository = data_source_1.AppDataSource.getRepository(entities_1.Schedule);
    const userRepo = data_source_1.AppDataSource.getRepository(entities_1.User);
    const user = yield userRepo.findOneBy({
        id: tokenId
    });
    if (!user) {
        throw new error_1.AppError('User not found', 404);
    }
    const realEstateExist = yield realEstateRepository.findOneBy({
        id: scheduleData.realEstateId
    });
    if (!realEstateExist) {
        throw new error_1.AppError('RealEstate not found', 404);
    }
    const [hour, minutes] = scheduleData.hour.split(':');
    if (parseInt(hour) < 8 || parseInt(hour) > 18) {
        throw new error_1.AppError('Invalid hour, available times are 8AM to 18PM', 400);
    }
    const day = new Date(scheduleData.date).getDay();
    if (day === 0 || day === 6) {
        throw new error_1.AppError('Invalid date, work days are monday to friday', 400);
    }
    const realEstateQuery = yield scheduleRepository
        .createQueryBuilder('schedule')
        .where('schedule.realEstateId = :realEstateId', {
        realEstateId: scheduleData.realEstateId
    })
        .andWhere('schedule.hour = :hour', { hour: scheduleData.hour })
        .andWhere('schedule.date = :date', { date: scheduleData.date })
        .getOne();
    if (realEstateQuery) {
        throw new error_1.AppError('Schedule to this real estate at this date and time already exists', 409);
    }
    const scheduleQuery = yield scheduleRepository
        .createQueryBuilder('schedule')
        .where('schedule.userId = :userId', { userId: tokenId })
        .andWhere('schedule.hour = :hour', { hour: scheduleData.hour })
        .andWhere('schedule.date = :date', { date: scheduleData.date })
        .getOne();
    if (scheduleQuery) {
        throw new error_1.AppError('User schedule to this real estate at this date and time already exists', 409);
    }
    const schedule = scheduleRepository.create(scheduleData);
    yield scheduleRepository.save(schedule);
    return {
        message: 'Schedule created'
    };
});
exports.createScheduleService = createScheduleService;

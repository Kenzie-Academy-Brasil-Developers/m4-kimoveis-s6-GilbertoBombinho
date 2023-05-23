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
exports.createRealEstateService = void 0;
const entities_1 = require("../../entities");
const data_source_1 = require("../../data-source");
const error_1 = require("../../error");
const createRealEstateService = (realEstateData) => __awaiter(void 0, void 0, void 0, function* () {
    const realEstateRepository = data_source_1.AppDataSource.getRepository(entities_1.RealEstate);
    const addressRepository = data_source_1.AppDataSource.getRepository(entities_1.Address);
    const categoryRepository = data_source_1.AppDataSource.getRepository(entities_1.Category);
    const categoryExist = yield categoryRepository.findOneBy({
        id: realEstateData.categoryId
    });
    if (!categoryExist) {
        throw new error_1.AppError('category not found', 404);
    }
    const addressCreate = addressRepository.create(realEstateData.address);
    yield addressRepository.save(addressCreate);
    const realEstate = realEstateRepository.create({
        value: realEstateData.value,
        size: realEstateData.size,
        address: addressCreate,
        category: categoryExist
    });
    yield realEstateRepository.save(realEstate);
    return realEstate;
});
exports.createRealEstateService = createRealEstateService;

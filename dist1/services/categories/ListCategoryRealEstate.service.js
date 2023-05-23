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
exports.listCategoryRealEstateService = void 0;
const entities_1 = require("../../entities");
const data_source_1 = require("../../data-source");
const error_1 = require("../../error");
const listCategoryRealEstateService = (categoryId) => __awaiter(void 0, void 0, void 0, function* () {
    const categoryRepository = data_source_1.AppDataSource.getRepository(entities_1.Category);
    const categoriesRealEstate = yield categoryRepository.findOne({
        where: {
            id: categoryId
        },
        relations: {
            realEstate: true
        }
    });
    if (!categoriesRealEstate) {
        throw new error_1.AppError('Category not found', 404);
    }
    return categoriesRealEstate;
});
exports.listCategoryRealEstateService = listCategoryRealEstateService;

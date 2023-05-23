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
exports.listCategoryRealEstateController = exports.listCategoriesController = exports.createCategoryController = void 0;
const createCategory_service_1 = require("../services/categories/createCategory.service");
const listCategories_service_1 = require("../services/categories/listCategories.service");
const ListCategoryRealEstate_service_1 = require("../services/categories/ListCategoryRealEstate.service");
const createCategoryController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const categoryData = request.body;
    const newCategory = yield (0, createCategory_service_1.createCategoryService)(categoryData);
    return response.status(201).json(newCategory);
});
exports.createCategoryController = createCategoryController;
const listCategoriesController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const categories = yield (0, listCategories_service_1.listCategoryService)();
    return response.json(categories);
});
exports.listCategoriesController = listCategoriesController;
const listCategoryRealEstateController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const realEstateId = parseInt(request.params.id);
    const categoryRealEstate = yield (0, ListCategoryRealEstate_service_1.listCategoryRealEstateService)(realEstateId);
    return response.json(categoryRealEstate);
});
exports.listCategoryRealEstateController = listCategoryRealEstateController;

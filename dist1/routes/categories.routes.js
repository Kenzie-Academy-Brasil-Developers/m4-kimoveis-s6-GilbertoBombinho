"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRoutes = void 0;
const express_1 = require("express");
const categories_controllers_1 = require("../controllers/categories.controllers");
const ensureBodyIsValid_1 = require("../middlewares/ensureBodyIsValid");
const categories_schemas_1 = require("../schemas/categories.schemas");
const ensureTokenIsValid_1 = require("../middlewares/ensureTokenIsValid");
const ensureIsAdmin_1 = require("../middlewares/ensureIsAdmin");
const ensureCategoryExist_1 = require("../middlewares/ensureCategoryExist");
exports.categoriesRoutes = (0, express_1.Router)();
exports.categoriesRoutes.post('', ensureTokenIsValid_1.ensureTokenIsValidMiddleware, ensureIsAdmin_1.ensureIsAdminMiddleware, (0, ensureBodyIsValid_1.ensureBodyIsValidMiddleware)(categories_schemas_1.categorySchemaRequest), ensureCategoryExist_1.ensureCategoryExistMiddleware, categories_controllers_1.createCategoryController);
exports.categoriesRoutes.get('', categories_controllers_1.listCategoriesController);
exports.categoriesRoutes.get('/:id/realEstate', categories_controllers_1.listCategoryRealEstateController);
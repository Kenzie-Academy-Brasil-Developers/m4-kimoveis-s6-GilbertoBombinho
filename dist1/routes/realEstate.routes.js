"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.realEstateRoutes = void 0;
const express_1 = require("express");
const realEstate_controllers_1 = require("../controllers/realEstate.controllers");
const ensureBodyIsValid_1 = require("../middlewares/ensureBodyIsValid");
const realEstate_schema_1 = require("../schemas/realEstate.schema");
const ensureTokenIsValid_1 = require("../middlewares/ensureTokenIsValid");
const ensureIsAdmin_1 = require("../middlewares/ensureIsAdmin");
const ensureAddressExist_1 = require("../middlewares/ensureAddressExist");
exports.realEstateRoutes = (0, express_1.Router)();
exports.realEstateRoutes.post('', ensureTokenIsValid_1.ensureTokenIsValidMiddleware, ensureIsAdmin_1.ensureIsAdminMiddleware, (0, ensureBodyIsValid_1.ensureBodyIsValidMiddleware)(realEstate_schema_1.realEstateSchemaRequest), ensureAddressExist_1.ensureAddressExistMiddleware, realEstate_controllers_1.createRealEstateController);
exports.realEstateRoutes.get('', realEstate_controllers_1.listRealEstateController);

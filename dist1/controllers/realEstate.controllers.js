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
exports.listRealEstateController = exports.createRealEstateController = void 0;
const createRealEstate_service_1 = require("../services/real-estate/createRealEstate.service");
const listTRealEstate_service_1 = require("../services/real-estate/listTRealEstate.service");
const createRealEstateController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const realEstateData = request.body;
    const newRealEstate = yield (0, createRealEstate_service_1.createRealEstateService)(realEstateData);
    return response.status(201).json(newRealEstate);
});
exports.createRealEstateController = createRealEstateController;
const listRealEstateController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const realEstate = yield (0, listTRealEstate_service_1.listRealEstateService)();
    return response.json(realEstate);
});
exports.listRealEstateController = listRealEstateController;

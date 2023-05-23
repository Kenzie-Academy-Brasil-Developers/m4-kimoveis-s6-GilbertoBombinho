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
exports.deleteUsersController = exports.updateUsersController = exports.getUsersController = exports.createUsersController = void 0;
const createUsers_service_1 = require("../services/users/createUsers.service");
const getUsers_service_1 = require("../services/users/getUsers.service");
const updateUsers_service_1 = require("../services/users/updateUsers.service");
const deleteUsers_service_1 = require("../services/users/deleteUsers.service");
const createUsersController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = request.body;
    const newUser = yield (0, createUsers_service_1.createUsersService)(userData);
    return response.status(201).json(newUser);
});
exports.createUsersController = createUsersController;
const getUsersController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, getUsers_service_1.getUsersService)();
    return response.json(users);
});
exports.getUsersController = getUsersController;
const updateUsersController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = request.body;
    const userId = parseInt(request.params.id);
    const newUserData = yield (0, updateUsers_service_1.updateUsersService)(userData, userId);
    return response.json(newUserData);
});
exports.updateUsersController = updateUsersController;
const deleteUsersController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(request.params.id);
    yield (0, deleteUsers_service_1.deleteUsersService)(userId);
    return response.status(204).send();
});
exports.deleteUsersController = deleteUsersController;

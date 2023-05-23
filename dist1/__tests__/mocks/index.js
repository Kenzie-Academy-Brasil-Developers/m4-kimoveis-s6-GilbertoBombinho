"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserRouteMock = exports.readUserRouteMock = exports.destroyUserRouteMock = exports.createUserRouteMock = exports.tokenMock = exports.createSessionRouteMock = exports.readScheduleRouteMock = exports.createScheduleRouteMock = exports.readRealEstateRouteMock = exports.errorsMock = exports.readCategoryRealStateRouteMock = exports.createRealEstateRouteMock = exports.readCategoryRouteMock = exports.createCategoryRouteMock = void 0;
const createCategory_route_mock_1 = __importDefault(require("./category/createCategory.route.mock"));
exports.createCategoryRouteMock = createCategory_route_mock_1.default;
const readCategory_route_mock_1 = __importDefault(require("./category/readCategory.route.mock"));
exports.readCategoryRouteMock = readCategory_route_mock_1.default;
const readCategoryRealState_route_mock_1 = __importDefault(require("./category/readCategoryRealState.route.mock"));
exports.readCategoryRealStateRouteMock = readCategoryRealState_route_mock_1.default;
const errors_mock_1 = __importDefault(require("./errors.mock"));
exports.errorsMock = errors_mock_1.default;
const createRealEstate_route_mock_1 = __importDefault(require("./realEstate/createRealEstate.route.mock"));
exports.createRealEstateRouteMock = createRealEstate_route_mock_1.default;
const readRealEstate_route_mock_1 = __importDefault(require("./realEstate/readRealEstate.route.mock"));
exports.readRealEstateRouteMock = readRealEstate_route_mock_1.default;
const createSchedule_route_mock_1 = __importDefault(require("./schedules/createSchedule.route.mock"));
exports.createScheduleRouteMock = createSchedule_route_mock_1.default;
const readScheduleRealStates_route_mock_1 = __importDefault(require("./schedules/readScheduleRealStates.route.mock"));
exports.readScheduleRouteMock = readScheduleRealStates_route_mock_1.default;
const createSession_route_mock_1 = __importDefault(require("./session/createSession.route.mock"));
exports.createSessionRouteMock = createSession_route_mock_1.default;
const token_mock_1 = __importDefault(require("./session/token.mock"));
exports.tokenMock = token_mock_1.default;
const createUser_route_mock_1 = __importDefault(require("./users/createUser.route.mock"));
exports.createUserRouteMock = createUser_route_mock_1.default;
const destroyUser_route_mock_1 = __importDefault(require("./users/destroyUser.route.mock"));
exports.destroyUserRouteMock = destroyUser_route_mock_1.default;
const readUser_route_mock_1 = __importDefault(require("./users/readUser.route.mock"));
exports.readUserRouteMock = readUser_route_mock_1.default;
const updateUser_route_mock_1 = __importDefault(require("./users/updateUser.route.mock"));
exports.updateUserRouteMock = updateUser_route_mock_1.default;
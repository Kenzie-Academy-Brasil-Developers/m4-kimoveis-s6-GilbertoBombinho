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
exports.ensureTokenIsValidMiddleware = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const error_1 = require("../error");
require("dotenv/config");
const ensureTokenIsValidMiddleware = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    let token = request.headers.authorization;
    if (!token) {
        throw new error_1.AppError('Missing bearer token', 401);
    }
    token = token.split(' ')[1];
    (0, jsonwebtoken_1.verify)(token, process.env.SECRET_KEY, (error, decoded) => {
        if (error) {
            throw new error_1.AppError(error.message, 401);
        }
        response.locals.token = {
            id: parseInt(decoded === null || decoded === void 0 ? void 0 : decoded.sub),
            admin: decoded.admin
        };
        return next();
    });
});
exports.ensureTokenIsValidMiddleware = ensureTokenIsValidMiddleware;

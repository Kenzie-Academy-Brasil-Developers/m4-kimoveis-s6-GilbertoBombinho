"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureBodyIsValidMiddleware = void 0;
const ensureBodyIsValidMiddleware = (schema) => (request, response, next) => {
    const validatedData = schema.parse(request.body);
    request.body = validatedData;
    return next();
};
exports.ensureBodyIsValidMiddleware = ensureBodyIsValidMiddleware;

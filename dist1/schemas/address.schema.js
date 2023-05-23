"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressSchemaRequest = exports.addressSchema = void 0;
const zod_1 = require("zod");
exports.addressSchema = zod_1.z.object({
    id: zod_1.z.number(),
    street: zod_1.z.string().max(45),
    zipCode: zod_1.z.string().max(8),
    number: zod_1.z.string().max(7).nullish(),
    city: zod_1.z.string().max(20),
    state: zod_1.z.string().max(2),
});
exports.addressSchemaRequest = exports.addressSchema.omit({
    id: true
});

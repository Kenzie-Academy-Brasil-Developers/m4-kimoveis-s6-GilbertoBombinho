"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchemaArray = exports.userSchemaUpdate = exports.userSchemaResponse = exports.userSchemaRequest = exports.userSchema = void 0;
const zod_1 = require("zod");
exports.userSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string().max(45),
    email: zod_1.z.string().max(45).email(),
    password: zod_1.z.string().max(120),
    admin: zod_1.z.boolean().nullish(),
    createdAt: zod_1.z.string().nullish(),
    updatedAt: zod_1.z.string().nullish(),
    deletedAt: zod_1.z.string().nullish()
});
exports.userSchemaRequest = exports.userSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    deletedAt: true
});
exports.userSchemaResponse = exports.userSchema.omit({
    password: true
});
exports.userSchemaUpdate = exports.userSchema.partial().omit({ id: true, admin: true });
exports.userSchemaArray = zod_1.z.array(exports.userSchemaResponse);

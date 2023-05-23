"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categorySchemaArray = exports.categorySchemaRequest = exports.categorySchema = void 0;
const zod_1 = require("zod");
exports.categorySchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string().max(45)
});
exports.categorySchemaRequest = exports.categorySchema.omit({
    id: true
});
exports.categorySchemaArray = zod_1.z.array(exports.categorySchema);

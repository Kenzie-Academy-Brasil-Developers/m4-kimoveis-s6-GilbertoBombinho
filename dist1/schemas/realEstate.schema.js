"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.realEstateSchemaArray = exports.realEstateSchemaRequest = exports.realEstateSchema = void 0;
const zod_1 = require("zod");
const address_schema_1 = require("./address.schema");
const categories_schemas_1 = require("./categories.schemas");
exports.realEstateSchema = zod_1.z.object({
    id: zod_1.z.number(),
    sold: zod_1.z.boolean().default(false),
    value: zod_1.z.string().or(zod_1.z.number().positive()),
    size: zod_1.z.number().int().positive(),
    createdAt: zod_1.z.string(),
    updatedAt: zod_1.z.string(),
    address: address_schema_1.addressSchema,
    category: categories_schemas_1.categorySchema
});
exports.realEstateSchemaRequest = zod_1.z.object({
    value: zod_1.z.string().or(zod_1.z.number().positive()),
    size: zod_1.z.number().int().positive(),
    address: address_schema_1.addressSchemaRequest,
    categoryId: zod_1.z.number()
});
exports.realEstateSchemaArray = zod_1.z.array(exports.realEstateSchema);

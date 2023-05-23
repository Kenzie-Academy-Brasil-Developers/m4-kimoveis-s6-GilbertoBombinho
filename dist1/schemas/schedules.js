"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheduleSchemaArray = exports.scheduleSchemaRequest = exports.scheduleSchema = void 0;
const zod_1 = require("zod");
const realEstate_schema_1 = require("./realEstate.schema");
const users_schemas_1 = require("./users.schemas");
exports.scheduleSchema = zod_1.z.object({
    id: zod_1.z.number(),
    date: zod_1.z.string(),
    hour: zod_1.z.string(),
    realEstate: realEstate_schema_1.realEstateSchema,
    user: users_schemas_1.userSchema
});
exports.scheduleSchemaRequest = exports.scheduleSchema
    .omit({
    id: true,
    user: true,
    realEstate: true
})
    .extend({ realEstateId: zod_1.z.number() });
exports.scheduleSchemaArray = zod_1.z.array(exports.scheduleSchema);

import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsersTable1683134632366 implements MigrationInterface {
    name = 'CreateUsersTable1683134632366'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "addresses" ("id" SERIAL NOT NULL, "street" character varying(45) NOT NULL, "zipCode" character varying(8) NOT NULL, "number" character varying(7), "city" character varying(20) NOT NULL, "state" character varying(2) NOT NULL, CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "nome" character varying(45) NOT NULL, "email" character varying(45) NOT NULL, "admin" boolean NOT NULL DEFAULT false, "password" character varying(120) NOT NULL, "createdAt" date NOT NULL, "updatedAt" date NOT NULL, "deletedAt" date, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
    }

}

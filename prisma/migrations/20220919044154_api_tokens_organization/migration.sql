/*
  Warnings:

  - Added the required column `organization_id` to the `api_tokens` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "api_tokens" ADD COLUMN     "organization_id" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "api_tokens" ADD CONSTRAINT "FK_api_tokens_organization_id" FOREIGN KEY ("organization_id") REFERENCES "organization"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

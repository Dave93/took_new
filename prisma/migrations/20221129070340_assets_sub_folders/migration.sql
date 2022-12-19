/*
  Warnings:

  - Added the required column `sub_folder` to the `assets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "assets" ADD COLUMN     "sub_folder" STRING NOT NULL;

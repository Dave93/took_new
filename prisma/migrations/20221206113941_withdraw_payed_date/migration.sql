-- AlterTable
ALTER TABLE "manager_withdraw" ADD COLUMN     "payed_date" TIMESTAMPTZ(5) DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "manager_withdraw_transactions" ADD COLUMN     "payed_date" TIMESTAMPTZ(5) DEFAULT CURRENT_TIMESTAMP;

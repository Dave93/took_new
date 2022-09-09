-- CreateTable
CREATE TABLE "order_status" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" TEXT NOT NULL,
    "sort" INTEGER NOT NULL DEFAULT 0,
    "organization_id" UUID NOT NULL,
    "finish" BOOLEAN NOT NULL DEFAULT false,
    "cancel" BOOLEAN NOT NULL DEFAULT false,
    "waiting" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "PK_order_status_id" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "order_status" ADD CONSTRAINT "FK_order_status_organization_id" FOREIGN KEY ("organization_id") REFERENCES "organization"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "terminals" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "phone" TEXT,
    "address" TEXT,
    "latitude" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "longitude" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "external_id" TEXT NOT NULL,
    "organization_id" UUID NOT NULL,
    "created_at" TIMESTAMP(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID,
    "updated_by" UUID,

    CONSTRAINT "PK_terminals_id" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "fki_FK_terminals_created_by" ON "terminals"("created_by");

-- CreateIndex
CREATE INDEX "fki_FK_terminals_updated_by" ON "terminals"("updated_by");

-- AddForeignKey
ALTER TABLE "terminals" ADD CONSTRAINT "FK_terminals_created_by" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "terminals" ADD CONSTRAINT "FK_terminals_updated_by" FOREIGN KEY ("updated_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "terminals" ADD CONSTRAINT "FK_terminals_organization_id" FOREIGN KEY ("organization_id") REFERENCES "organization"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

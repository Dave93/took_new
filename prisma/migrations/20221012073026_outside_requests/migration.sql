-- CreateTable
CREATE TABLE "outside_requests" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "request_type" STRING NOT NULL,
    "request_data" STRING NOT NULL,
    "response_data" STRING,
    "response_status" STRING,
    "external_url" STRING NOT NULL,
    "model_name" STRING NOT NULL,
    "model_id" STRING NOT NULL,
    "created_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID,
    "updated_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_by" UUID,

    CONSTRAINT "PK_outside_requests_id" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "outside_requests" ADD CONSTRAINT "FK_outside_requests_created_by" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "outside_requests" ADD CONSTRAINT "FK_outside_requests_updated_by" FOREIGN KEY ("updated_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

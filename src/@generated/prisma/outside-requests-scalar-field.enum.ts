import { registerEnumType } from '@nestjs/graphql';

export enum Outside_requestsScalarFieldEnum {
    id = "id",
    request_type = "request_type",
    request_data = "request_data",
    response_data = "response_data",
    response_status = "response_status",
    external_url = "external_url",
    model_name = "model_name",
    model_id = "model_id",
    created_at = "created_at",
    created_by = "created_by",
    updated_at = "updated_at",
    updated_by = "updated_by"
}


registerEnumType(Outside_requestsScalarFieldEnum, { name: 'Outside_requestsScalarFieldEnum', description: undefined })

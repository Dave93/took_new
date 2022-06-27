import { registerEnumType } from '@nestjs/graphql';

export enum OtpScalarFieldEnum {
    id = "id",
    user_id = "user_id",
    otp = "otp",
    expiry_date = "expiry_date",
    verified = "verified",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(OtpScalarFieldEnum, { name: 'OtpScalarFieldEnum', description: undefined })

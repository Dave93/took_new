import { registerEnumType } from '@nestjs/graphql';

export enum Scheduled_reports_subscriptionScalarFieldEnum {
    id = "id",
    report_id = "report_id",
    user_id = "user_id",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(Scheduled_reports_subscriptionScalarFieldEnum, { name: 'Scheduled_reports_subscriptionScalarFieldEnum', description: undefined })

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutScheduled_reports_subscription_usersInput } from './users-update-without-scheduled-reports-subscription-users.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutScheduled_reports_subscription_usersInput } from './users-create-without-scheduled-reports-subscription-users.input';

@InputType()
export class usersUpsertWithoutScheduled_reports_subscription_usersInput {

    @Field(() => usersUpdateWithoutScheduled_reports_subscription_usersInput, {nullable:false})
    @Type(() => usersUpdateWithoutScheduled_reports_subscription_usersInput)
    update!: usersUpdateWithoutScheduled_reports_subscription_usersInput;

    @Field(() => usersCreateWithoutScheduled_reports_subscription_usersInput, {nullable:false})
    @Type(() => usersCreateWithoutScheduled_reports_subscription_usersInput)
    create!: usersCreateWithoutScheduled_reports_subscription_usersInput;
}

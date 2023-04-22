import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutScheduled_reports_subscription_usersInput } from './users-create-without-scheduled-reports-subscription-users.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutScheduled_reports_subscription_usersInput } from './users-create-or-connect-without-scheduled-reports-subscription-users.input';
import { usersUpsertWithoutScheduled_reports_subscription_usersInput } from './users-upsert-without-scheduled-reports-subscription-users.input';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateWithoutScheduled_reports_subscription_usersInput } from './users-update-without-scheduled-reports-subscription-users.input';

@InputType()
export class usersUpdateOneRequiredWithoutScheduled_reports_subscription_usersNestedInput {

    @Field(() => usersCreateWithoutScheduled_reports_subscription_usersInput, {nullable:true})
    @Type(() => usersCreateWithoutScheduled_reports_subscription_usersInput)
    create?: usersCreateWithoutScheduled_reports_subscription_usersInput;

    @Field(() => usersCreateOrConnectWithoutScheduled_reports_subscription_usersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutScheduled_reports_subscription_usersInput)
    connectOrCreate?: usersCreateOrConnectWithoutScheduled_reports_subscription_usersInput;

    @Field(() => usersUpsertWithoutScheduled_reports_subscription_usersInput, {nullable:true})
    @Type(() => usersUpsertWithoutScheduled_reports_subscription_usersInput)
    upsert?: usersUpsertWithoutScheduled_reports_subscription_usersInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;

    @Field(() => usersUpdateWithoutScheduled_reports_subscription_usersInput, {nullable:true})
    @Type(() => usersUpdateWithoutScheduled_reports_subscription_usersInput)
    update?: usersUpdateWithoutScheduled_reports_subscription_usersInput;
}

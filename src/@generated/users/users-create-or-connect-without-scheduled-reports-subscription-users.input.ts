import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutScheduled_reports_subscription_usersInput } from './users-create-without-scheduled-reports-subscription-users.input';

@InputType()
export class usersCreateOrConnectWithoutScheduled_reports_subscription_usersInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: usersWhereUniqueInput;

    @Field(() => usersCreateWithoutScheduled_reports_subscription_usersInput, {nullable:false})
    @Type(() => usersCreateWithoutScheduled_reports_subscription_usersInput)
    create!: usersCreateWithoutScheduled_reports_subscription_usersInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutTimesheet_usersInput } from './users-create-without-timesheet-users.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutTimesheet_usersInput } from './users-create-or-connect-without-timesheet-users.input';
import { usersUpsertWithoutTimesheet_usersInput } from './users-upsert-without-timesheet-users.input';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateWithoutTimesheet_usersInput } from './users-update-without-timesheet-users.input';

@InputType()
export class usersUpdateOneRequiredWithoutTimesheet_usersNestedInput {

    @Field(() => usersCreateWithoutTimesheet_usersInput, {nullable:true})
    @Type(() => usersCreateWithoutTimesheet_usersInput)
    create?: usersCreateWithoutTimesheet_usersInput;

    @Field(() => usersCreateOrConnectWithoutTimesheet_usersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutTimesheet_usersInput)
    connectOrCreate?: usersCreateOrConnectWithoutTimesheet_usersInput;

    @Field(() => usersUpsertWithoutTimesheet_usersInput, {nullable:true})
    @Type(() => usersUpsertWithoutTimesheet_usersInput)
    upsert?: usersUpsertWithoutTimesheet_usersInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;

    @Field(() => usersUpdateWithoutTimesheet_usersInput, {nullable:true})
    @Type(() => usersUpdateWithoutTimesheet_usersInput)
    update?: usersUpdateWithoutTimesheet_usersInput;
}

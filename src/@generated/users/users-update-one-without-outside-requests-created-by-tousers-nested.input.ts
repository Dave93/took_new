import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutOutside_requests_created_byTousersInput } from './users-create-without-outside-requests-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutOutside_requests_created_byTousersInput } from './users-create-or-connect-without-outside-requests-created-by-tousers.input';
import { usersUpsertWithoutOutside_requests_created_byTousersInput } from './users-upsert-without-outside-requests-created-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateWithoutOutside_requests_created_byTousersInput } from './users-update-without-outside-requests-created-by-tousers.input';

@InputType()
export class usersUpdateOneWithoutOutside_requests_created_byTousersNestedInput {

    @Field(() => usersCreateWithoutOutside_requests_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutOutside_requests_created_byTousersInput)
    create?: usersCreateWithoutOutside_requests_created_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutOutside_requests_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutOutside_requests_created_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutOutside_requests_created_byTousersInput;

    @Field(() => usersUpsertWithoutOutside_requests_created_byTousersInput, {nullable:true})
    @Type(() => usersUpsertWithoutOutside_requests_created_byTousersInput)
    upsert?: usersUpsertWithoutOutside_requests_created_byTousersInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;

    @Field(() => usersUpdateWithoutOutside_requests_created_byTousersInput, {nullable:true})
    @Type(() => usersUpdateWithoutOutside_requests_created_byTousersInput)
    update?: usersUpdateWithoutOutside_requests_created_byTousersInput;
}

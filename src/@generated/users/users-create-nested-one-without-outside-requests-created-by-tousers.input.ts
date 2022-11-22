import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutOutside_requests_created_byTousersInput } from './users-create-without-outside-requests-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutOutside_requests_created_byTousersInput } from './users-create-or-connect-without-outside-requests-created-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersCreateNestedOneWithoutOutside_requests_created_byTousersInput {

    @Field(() => usersCreateWithoutOutside_requests_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutOutside_requests_created_byTousersInput)
    create?: usersCreateWithoutOutside_requests_created_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutOutside_requests_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutOutside_requests_created_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutOutside_requests_created_byTousersInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutOutside_requests_updated_byTousersInput } from './users-create-without-outside-requests-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutOutside_requests_updated_byTousersInput } from './users-create-or-connect-without-outside-requests-updated-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersCreateNestedOneWithoutOutside_requests_updated_byTousersInput {

    @Field(() => usersCreateWithoutOutside_requests_updated_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutOutside_requests_updated_byTousersInput)
    create?: usersCreateWithoutOutside_requests_updated_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutOutside_requests_updated_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutOutside_requests_updated_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutOutside_requests_updated_byTousersInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;
}

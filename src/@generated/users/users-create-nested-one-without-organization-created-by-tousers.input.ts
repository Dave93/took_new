import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutOrganization_created_byTousersInput } from './users-create-without-organization-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutOrganization_created_byTousersInput } from './users-create-or-connect-without-organization-created-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersCreateNestedOneWithoutOrganization_created_byTousersInput {

    @Field(() => usersCreateWithoutOrganization_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutOrganization_created_byTousersInput)
    create?: usersCreateWithoutOrganization_created_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutOrganization_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutOrganization_created_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutOrganization_created_byTousersInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;
}

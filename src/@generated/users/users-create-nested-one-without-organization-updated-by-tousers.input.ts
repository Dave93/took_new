import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutOrganization_updated_byTousersInput } from './users-create-without-organization-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutOrganization_updated_byTousersInput } from './users-create-or-connect-without-organization-updated-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersCreateNestedOneWithoutOrganization_updated_byTousersInput {

    @Field(() => usersCreateWithoutOrganization_updated_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutOrganization_updated_byTousersInput)
    create?: usersCreateWithoutOrganization_updated_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutOrganization_updated_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutOrganization_updated_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutOrganization_updated_byTousersInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;
}

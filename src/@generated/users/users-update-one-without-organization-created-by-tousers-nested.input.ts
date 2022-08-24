import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutOrganization_created_byTousersInput } from './users-create-without-organization-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutOrganization_created_byTousersInput } from './users-create-or-connect-without-organization-created-by-tousers.input';
import { usersUpsertWithoutOrganization_created_byTousersInput } from './users-upsert-without-organization-created-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateWithoutOrganization_created_byTousersInput } from './users-update-without-organization-created-by-tousers.input';

@InputType()
export class usersUpdateOneWithoutOrganization_created_byTousersNestedInput {

    @Field(() => usersCreateWithoutOrganization_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutOrganization_created_byTousersInput)
    create?: usersCreateWithoutOrganization_created_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutOrganization_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutOrganization_created_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutOrganization_created_byTousersInput;

    @Field(() => usersUpsertWithoutOrganization_created_byTousersInput, {nullable:true})
    @Type(() => usersUpsertWithoutOrganization_created_byTousersInput)
    upsert?: usersUpsertWithoutOrganization_created_byTousersInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;

    @Field(() => usersUpdateWithoutOrganization_created_byTousersInput, {nullable:true})
    @Type(() => usersUpdateWithoutOrganization_created_byTousersInput)
    update?: usersUpdateWithoutOrganization_created_byTousersInput;
}

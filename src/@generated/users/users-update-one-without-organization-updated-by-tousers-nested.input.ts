import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutOrganization_updated_byTousersInput } from './users-create-without-organization-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutOrganization_updated_byTousersInput } from './users-create-or-connect-without-organization-updated-by-tousers.input';
import { usersUpsertWithoutOrganization_updated_byTousersInput } from './users-upsert-without-organization-updated-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateWithoutOrganization_updated_byTousersInput } from './users-update-without-organization-updated-by-tousers.input';

@InputType()
export class usersUpdateOneWithoutOrganization_updated_byTousersNestedInput {

    @Field(() => usersCreateWithoutOrganization_updated_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutOrganization_updated_byTousersInput)
    create?: usersCreateWithoutOrganization_updated_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutOrganization_updated_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutOrganization_updated_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutOrganization_updated_byTousersInput;

    @Field(() => usersUpsertWithoutOrganization_updated_byTousersInput, {nullable:true})
    @Type(() => usersUpsertWithoutOrganization_updated_byTousersInput)
    upsert?: usersUpsertWithoutOrganization_updated_byTousersInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;

    @Field(() => usersUpdateWithoutOrganization_updated_byTousersInput, {nullable:true})
    @Type(() => usersUpdateWithoutOrganization_updated_byTousersInput)
    update?: usersUpdateWithoutOrganization_updated_byTousersInput;
}

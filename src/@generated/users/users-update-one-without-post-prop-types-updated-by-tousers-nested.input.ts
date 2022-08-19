import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutPost_prop_types_updated_byTousersInput } from './users-create-without-post-prop-types-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutPost_prop_types_updated_byTousersInput } from './users-create-or-connect-without-post-prop-types-updated-by-tousers.input';
import { usersUpsertWithoutPost_prop_types_updated_byTousersInput } from './users-upsert-without-post-prop-types-updated-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateWithoutPost_prop_types_updated_byTousersInput } from './users-update-without-post-prop-types-updated-by-tousers.input';

@InputType()
export class usersUpdateOneWithoutPost_prop_types_updated_byTousersNestedInput {

    @Field(() => usersCreateWithoutPost_prop_types_updated_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutPost_prop_types_updated_byTousersInput)
    create?: usersCreateWithoutPost_prop_types_updated_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutPost_prop_types_updated_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutPost_prop_types_updated_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutPost_prop_types_updated_byTousersInput;

    @Field(() => usersUpsertWithoutPost_prop_types_updated_byTousersInput, {nullable:true})
    @Type(() => usersUpsertWithoutPost_prop_types_updated_byTousersInput)
    upsert?: usersUpsertWithoutPost_prop_types_updated_byTousersInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;

    @Field(() => usersUpdateWithoutPost_prop_types_updated_byTousersInput, {nullable:true})
    @Type(() => usersUpdateWithoutPost_prop_types_updated_byTousersInput)
    update?: usersUpdateWithoutPost_prop_types_updated_byTousersInput;
}

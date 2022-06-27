import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutPost_prop_types_updated_byTousersInput } from './users-create-without-post-prop-types-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutPost_prop_types_updated_byTousersInput } from './users-create-or-connect-without-post-prop-types-updated-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersCreateNestedOneWithoutPost_prop_types_updated_byTousersInput {

    @Field(() => usersCreateWithoutPost_prop_types_updated_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutPost_prop_types_updated_byTousersInput)
    create?: usersCreateWithoutPost_prop_types_updated_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutPost_prop_types_updated_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutPost_prop_types_updated_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutPost_prop_types_updated_byTousersInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;
}

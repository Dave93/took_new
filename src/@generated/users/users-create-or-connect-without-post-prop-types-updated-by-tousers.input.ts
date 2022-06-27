import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutPost_prop_types_updated_byTousersInput } from './users-create-without-post-prop-types-updated-by-tousers.input';

@InputType()
export class usersCreateOrConnectWithoutPost_prop_types_updated_byTousersInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: usersWhereUniqueInput;

    @Field(() => usersCreateWithoutPost_prop_types_updated_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutPost_prop_types_updated_byTousersInput)
    create!: usersCreateWithoutPost_prop_types_updated_byTousersInput;
}

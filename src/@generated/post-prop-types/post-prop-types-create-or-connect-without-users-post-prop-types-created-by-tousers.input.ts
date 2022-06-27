import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { post_prop_typesWhereUniqueInput } from './post-prop-types-where-unique.input';
import { Type } from 'class-transformer';
import { post_prop_typesCreateWithoutUsers_post_prop_types_created_byTousersInput } from './post-prop-types-create-without-users-post-prop-types-created-by-tousers.input';

@InputType()
export class post_prop_typesCreateOrConnectWithoutUsers_post_prop_types_created_byTousersInput {

    @Field(() => post_prop_typesWhereUniqueInput, {nullable:false})
    @Type(() => post_prop_typesWhereUniqueInput)
    where!: post_prop_typesWhereUniqueInput;

    @Field(() => post_prop_typesCreateWithoutUsers_post_prop_types_created_byTousersInput, {nullable:false})
    @Type(() => post_prop_typesCreateWithoutUsers_post_prop_types_created_byTousersInput)
    create!: post_prop_typesCreateWithoutUsers_post_prop_types_created_byTousersInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { post_prop_typesCreateManyUsers_post_prop_types_created_byTousersInput } from './post-prop-types-create-many-users-post-prop-types-created-by-tousers.input';
import { Type } from 'class-transformer';

@InputType()
export class post_prop_typesCreateManyUsers_post_prop_types_created_byTousersInputEnvelope {

    @Field(() => [post_prop_typesCreateManyUsers_post_prop_types_created_byTousersInput], {nullable:false})
    @Type(() => post_prop_typesCreateManyUsers_post_prop_types_created_byTousersInput)
    data!: Array<post_prop_typesCreateManyUsers_post_prop_types_created_byTousersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

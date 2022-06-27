import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutPost_prop_types_updated_byTousersInput } from './users-update-without-post-prop-types-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutPost_prop_types_updated_byTousersInput } from './users-create-without-post-prop-types-updated-by-tousers.input';

@InputType()
export class usersUpsertWithoutPost_prop_types_updated_byTousersInput {

    @Field(() => usersUpdateWithoutPost_prop_types_updated_byTousersInput, {nullable:false})
    @Type(() => usersUpdateWithoutPost_prop_types_updated_byTousersInput)
    update!: usersUpdateWithoutPost_prop_types_updated_byTousersInput;

    @Field(() => usersCreateWithoutPost_prop_types_updated_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutPost_prop_types_updated_byTousersInput)
    create!: usersCreateWithoutPost_prop_types_updated_byTousersInput;
}

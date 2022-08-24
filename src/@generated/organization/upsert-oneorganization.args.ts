import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { organizationWhereUniqueInput } from './organization-where-unique.input';
import { Type } from 'class-transformer';
import { organizationCreateInput } from './organization-create.input';
import { organizationUpdateInput } from './organization-update.input';

@ArgsType()
export class UpsertOneorganizationArgs {

    @Field(() => organizationWhereUniqueInput, {nullable:false})
    @Type(() => organizationWhereUniqueInput)
    where!: organizationWhereUniqueInput;

    @Field(() => organizationCreateInput, {nullable:false})
    @Type(() => organizationCreateInput)
    create!: organizationCreateInput;

    @Field(() => organizationUpdateInput, {nullable:false})
    @Type(() => organizationUpdateInput)
    update!: organizationUpdateInput;
}

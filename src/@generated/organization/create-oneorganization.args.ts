import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { organizationCreateInput } from './organization-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneorganizationArgs {

    @Field(() => organizationCreateInput, {nullable:false})
    @Type(() => organizationCreateInput)
    data!: organizationCreateInput;
}

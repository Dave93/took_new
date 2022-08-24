import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { organizationCreateManyInput } from './organization-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyorganizationArgs {

    @Field(() => [organizationCreateManyInput], {nullable:false})
    @Type(() => organizationCreateManyInput)
    data!: Array<organizationCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

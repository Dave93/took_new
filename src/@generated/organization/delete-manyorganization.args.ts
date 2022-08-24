import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { organizationWhereInput } from './organization-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyorganizationArgs {

    @Field(() => organizationWhereInput, {nullable:true})
    @Type(() => organizationWhereInput)
    where?: organizationWhereInput;
}

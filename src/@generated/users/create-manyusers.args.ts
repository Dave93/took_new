import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { usersCreateManyInput } from './users-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyusersArgs {

    @Field(() => [usersCreateManyInput], {nullable:false})
    @Type(() => usersCreateManyInput)
    data!: Array<usersCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { migrationsUpdateManyMutationInput } from './migrations-update-many-mutation.input';
import { Type } from 'class-transformer';
import { migrationsWhereInput } from './migrations-where.input';

@ArgsType()
export class UpdateManymigrationsArgs {

    @Field(() => migrationsUpdateManyMutationInput, {nullable:false})
    @Type(() => migrationsUpdateManyMutationInput)
    data!: migrationsUpdateManyMutationInput;

    @Field(() => migrationsWhereInput, {nullable:true})
    @Type(() => migrationsWhereInput)
    where?: migrationsWhereInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { migrationsCreateManyInput } from './migrations-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManymigrationsArgs {

    @Field(() => [migrationsCreateManyInput], {nullable:false})
    @Type(() => migrationsCreateManyInput)
    data!: Array<migrationsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

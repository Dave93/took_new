import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BigIntFilter } from '../prisma/big-int-filter.input';

@InputType()
export class migrationsWhereInput {

    @Field(() => [migrationsWhereInput], {nullable:true})
    AND?: Array<migrationsWhereInput>;

    @Field(() => [migrationsWhereInput], {nullable:true})
    OR?: Array<migrationsWhereInput>;

    @Field(() => [migrationsWhereInput], {nullable:true})
    NOT?: Array<migrationsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => BigIntFilter, {nullable:true})
    timestamp?: BigIntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;
}

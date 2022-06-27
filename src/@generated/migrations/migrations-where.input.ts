import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class migrationsWhereInput {

    @Field(() => [migrationsWhereInput], {nullable:true})
    AND?: Array<migrationsWhereInput>;

    @Field(() => [migrationsWhereInput], {nullable:true})
    OR?: Array<migrationsWhereInput>;

    @Field(() => [migrationsWhereInput], {nullable:true})
    NOT?: Array<migrationsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    timestamp?: BigIntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;
}

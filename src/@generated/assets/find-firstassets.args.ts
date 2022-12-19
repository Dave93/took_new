import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { assetsWhereInput } from './assets-where.input';
import { Type } from 'class-transformer';
import { assetsOrderByWithRelationInput } from './assets-order-by-with-relation.input';
import { assetsWhereUniqueInput } from './assets-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AssetsScalarFieldEnum } from '../prisma/assets-scalar-field.enum';

@ArgsType()
export class FindFirstassetsArgs {

    @Field(() => assetsWhereInput, {nullable:true})
    @Type(() => assetsWhereInput)
    where?: assetsWhereInput;

    @Field(() => [assetsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<assetsOrderByWithRelationInput>;

    @Field(() => assetsWhereUniqueInput, {nullable:true})
    cursor?: assetsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AssetsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AssetsScalarFieldEnum>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { assetsWhereInput } from '../assets/assets-where.input';

@InputType()
export class AssetsRelationFilter {

    @Field(() => assetsWhereInput, {nullable:true})
    is?: assetsWhereInput;

    @Field(() => assetsWhereInput, {nullable:true})
    isNot?: assetsWhereInput;
}

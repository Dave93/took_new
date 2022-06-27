import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { sale_type } from './sale-type.enum';
import { type } from './type.enum';

@ObjectType()
export class Post_prop_typesMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => sale_type, {nullable:true})
    sale_type?: keyof typeof sale_type;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => type, {nullable:true})
    type?: keyof typeof type;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;
}

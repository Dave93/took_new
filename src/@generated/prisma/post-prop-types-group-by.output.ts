import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { sale_type } from './sale-type.enum';
import { type } from './type.enum';
import { Post_prop_typesCountAggregate } from './post-prop-types-count-aggregate.output';
import { Post_prop_typesMinAggregate } from './post-prop-types-min-aggregate.output';
import { Post_prop_typesMaxAggregate } from './post-prop-types-max-aggregate.output';

@ObjectType()
export class Post_prop_typesGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => sale_type, {nullable:false})
    sale_type!: keyof typeof sale_type;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => type, {nullable:false})
    type!: keyof typeof type;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;

    @Field(() => Post_prop_typesCountAggregate, {nullable:true})
    _count?: Post_prop_typesCountAggregate;

    @Field(() => Post_prop_typesMinAggregate, {nullable:true})
    _min?: Post_prop_typesMinAggregate;

    @Field(() => Post_prop_typesMaxAggregate, {nullable:true})
    _max?: Post_prop_typesMaxAggregate;
}

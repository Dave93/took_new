import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { sale_type } from '../prisma/sale-type.enum';
import { type } from '../prisma/type.enum';
import { users } from '../users/users.model';

@ObjectType()
export class post_prop_types {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => sale_type, {nullable:false,defaultValue:'buy'})
    sale_type!: keyof typeof sale_type;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => type, {nullable:false,defaultValue:'string'})
    type!: keyof typeof type;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => String, {nullable:true})
    created_by!: string | null;

    @Field(() => String, {nullable:true})
    updated_by!: string | null;

    @Field(() => users, {nullable:true})
    users_post_prop_types_created_byTousers?: users | null;

    @Field(() => users, {nullable:true})
    users_post_prop_types_updated_byTousers?: users | null;
}

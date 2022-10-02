import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { users } from '../users/users.model';
import { organization } from '../organization/organization.model';

@ObjectType()
export class api_tokens {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    active!: boolean;

    @Field(() => String, {nullable:false})
    token!: string;

    @Field(() => String, {nullable:false})
    organization_id!: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => String, {nullable:true})
    created_by!: string | null;

    @Field(() => String, {nullable:true})
    updated_by!: string | null;

    @Field(() => users, {nullable:true})
    api_tokens_created_byTousers?: users | null;

    @Field(() => users, {nullable:true})
    api_tokens_updated_byTousers?: users | null;

    @Field(() => organization, {nullable:false})
    api_tokens_organization?: organization;
}

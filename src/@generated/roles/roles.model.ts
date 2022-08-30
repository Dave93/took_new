import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { users } from '../users/users.model';
import { roles_permissions } from '../roles-permissions/roles-permissions.model';
import { users_roles } from '../users-roles/users-roles.model';
import { RolesCount } from '../prisma/roles-count.output';

@ObjectType()
export class roles {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    code!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    active!: boolean;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => String, {nullable:true})
    created_by!: string | null;

    @Field(() => String, {nullable:true})
    updated_by!: string | null;

    @Field(() => users, {nullable:true})
    users_roles_created_byTousers?: users | null;

    @Field(() => users, {nullable:true})
    users_roles_updated_byTousers?: users | null;

    @Field(() => [roles_permissions], {nullable:true})
    roles_permissions?: Array<roles_permissions>;

    @Field(() => [users_roles], {nullable:true})
    users_roles?: Array<users_roles>;

    @Field(() => RolesCount, {nullable:false})
    _count?: RolesCount;
}

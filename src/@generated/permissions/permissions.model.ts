import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { users } from '../users/users.model';
import { roles_permissions } from '../roles-permissions/roles-permissions.model';
import { users_permissions } from '../users-permissions/users-permissions.model';
import { PermissionsCount } from '../prisma/permissions-count.output';

@ObjectType()
export class permissions {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:false})
    description!: string;

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
    users_permissions_created_byTousers?: users | null;

    @Field(() => users, {nullable:true})
    users_permissions_updated_byTousers?: users | null;

    @Field(() => [roles_permissions], {nullable:true})
    roles_permissions?: Array<roles_permissions>;

    @Field(() => [users_permissions], {nullable:true})
    users_permissions?: Array<users_permissions>;

    @Field(() => PermissionsCount, {nullable:false})
    _count?: PermissionsCount;
}

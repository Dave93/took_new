import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { user_status } from '../prisma/user-status.enum';
import { otp } from '../otp/otp.model';
import { permissions } from '../permissions/permissions.model';
import { post } from '../post/post.model';
import { roles } from '../roles/roles.model';
import { roles_permissions } from '../roles-permissions/roles-permissions.model';
import { users_permissions } from '../users-permissions/users-permissions.model';
import { users_roles } from '../users-roles/users-roles.model';
import { post_prop_types } from '../post-prop-types/post-prop-types.model';
import { city } from '../city/city.model';
import { UsersCount } from '../prisma/users-count.output';

@ObjectType()
export class users {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => String, {nullable:true})
    first_name!: string | null;

    @Field(() => String, {nullable:true})
    last_name!: string | null;

    @Field(() => String, {nullable:true})
    password!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    is_super_user!: boolean;

    @Field(() => user_status, {nullable:false})
    status!: keyof typeof user_status;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => [otp], {nullable:true})
    otp?: Array<otp>;

    @Field(() => [permissions], {nullable:true})
    permissions_permissions_created_byTousers?: Array<permissions>;

    @Field(() => [permissions], {nullable:true})
    permissions_permissions_updated_byTousers?: Array<permissions>;

    @Field(() => [post], {nullable:true})
    post_post_created_byTousers?: Array<post>;

    @Field(() => [post], {nullable:true})
    post_updated_byTousers?: Array<post>;

    @Field(() => [post], {nullable:true})
    post_post_user_idTousers?: Array<post>;

    @Field(() => [roles], {nullable:true})
    roles_roles_created_byTousers?: Array<roles>;

    @Field(() => [roles], {nullable:true})
    roles_roles_updated_byTousers?: Array<roles>;

    @Field(() => [roles_permissions], {nullable:true})
    roles_permissions_roles_permissions_created_byTousers?: Array<roles_permissions>;

    @Field(() => [roles_permissions], {nullable:true})
    roles_permissions_roles_permissions_updated_byTousers?: Array<roles_permissions>;

    @Field(() => [users_permissions], {nullable:true})
    users_permissions_usersTousers_permissions_created_by?: Array<users_permissions>;

    @Field(() => [users_permissions], {nullable:true})
    users_permissions_usersTousers_permissions_updated_by?: Array<users_permissions>;

    @Field(() => [users_permissions], {nullable:true})
    users_permissions_usersTousers_permissions_user_id?: Array<users_permissions>;

    @Field(() => [users_roles], {nullable:true})
    users_roles_usersTousers_roles_created_by?: Array<users_roles>;

    @Field(() => [users_roles], {nullable:true})
    users_roles_usersTousers_roles_updated_by?: Array<users_roles>;

    @Field(() => [users_roles], {nullable:true})
    users_roles_usersTousers_roles_user_id?: Array<users_roles>;

    @Field(() => [post_prop_types], {nullable:true})
    post_prop_types_created_byTousers?: Array<post_prop_types>;

    @Field(() => [post_prop_types], {nullable:true})
    post_prop_types_updated_byTousers?: Array<post_prop_types>;

    @Field(() => [city], {nullable:true})
    city_created_byTousers?: Array<city>;

    @Field(() => [city], {nullable:true})
    city_updated_byTousers?: Array<city>;

    @Field(() => UsersCount, {nullable:false})
    _count?: UsersCount;
}

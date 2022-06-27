import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { UsersRelationFilter } from '../prisma/users-relation-filter.input';

@InputType()
export class otpWhereInput {

    @Field(() => [otpWhereInput], {nullable:true})
    AND?: Array<otpWhereInput>;

    @Field(() => [otpWhereInput], {nullable:true})
    OR?: Array<otpWhereInput>;

    @Field(() => [otpWhereInput], {nullable:true})
    NOT?: Array<otpWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    user_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    otp?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    expiry_date?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    verified?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    users?: UsersRelationFilter;
}

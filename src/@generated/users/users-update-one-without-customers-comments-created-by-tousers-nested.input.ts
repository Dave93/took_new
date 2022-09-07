import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutCustomers_comments_created_byTousersInput } from './users-create-without-customers-comments-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutCustomers_comments_created_byTousersInput } from './users-create-or-connect-without-customers-comments-created-by-tousers.input';
import { usersUpsertWithoutCustomers_comments_created_byTousersInput } from './users-upsert-without-customers-comments-created-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateWithoutCustomers_comments_created_byTousersInput } from './users-update-without-customers-comments-created-by-tousers.input';

@InputType()
export class usersUpdateOneWithoutCustomers_comments_created_byTousersNestedInput {

    @Field(() => usersCreateWithoutCustomers_comments_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutCustomers_comments_created_byTousersInput)
    create?: usersCreateWithoutCustomers_comments_created_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutCustomers_comments_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutCustomers_comments_created_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutCustomers_comments_created_byTousersInput;

    @Field(() => usersUpsertWithoutCustomers_comments_created_byTousersInput, {nullable:true})
    @Type(() => usersUpsertWithoutCustomers_comments_created_byTousersInput)
    upsert?: usersUpsertWithoutCustomers_comments_created_byTousersInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;

    @Field(() => usersUpdateWithoutCustomers_comments_created_byTousersInput, {nullable:true})
    @Type(() => usersUpdateWithoutCustomers_comments_created_byTousersInput)
    update?: usersUpdateWithoutCustomers_comments_created_byTousersInput;
}

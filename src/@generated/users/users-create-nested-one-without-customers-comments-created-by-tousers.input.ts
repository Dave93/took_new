import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutCustomers_comments_created_byTousersInput } from './users-create-without-customers-comments-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutCustomers_comments_created_byTousersInput } from './users-create-or-connect-without-customers-comments-created-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersCreateNestedOneWithoutCustomers_comments_created_byTousersInput {

    @Field(() => usersCreateWithoutCustomers_comments_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutCustomers_comments_created_byTousersInput)
    create?: usersCreateWithoutCustomers_comments_created_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutCustomers_comments_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutCustomers_comments_created_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutCustomers_comments_created_byTousersInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;
}

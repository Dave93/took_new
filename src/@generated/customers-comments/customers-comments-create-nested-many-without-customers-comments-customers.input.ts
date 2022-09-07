import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customers_commentsCreateWithoutCustomers_comments_customersInput } from './customers-comments-create-without-customers-comments-customers.input';
import { Type } from 'class-transformer';
import { customers_commentsCreateOrConnectWithoutCustomers_comments_customersInput } from './customers-comments-create-or-connect-without-customers-comments-customers.input';
import { customers_commentsCreateManyCustomers_comments_customersInputEnvelope } from './customers-comments-create-many-customers-comments-customers-input-envelope.input';
import { customers_commentsWhereUniqueInput } from './customers-comments-where-unique.input';

@InputType()
export class customers_commentsCreateNestedManyWithoutCustomers_comments_customersInput {

    @Field(() => [customers_commentsCreateWithoutCustomers_comments_customersInput], {nullable:true})
    @Type(() => customers_commentsCreateWithoutCustomers_comments_customersInput)
    create?: Array<customers_commentsCreateWithoutCustomers_comments_customersInput>;

    @Field(() => [customers_commentsCreateOrConnectWithoutCustomers_comments_customersInput], {nullable:true})
    @Type(() => customers_commentsCreateOrConnectWithoutCustomers_comments_customersInput)
    connectOrCreate?: Array<customers_commentsCreateOrConnectWithoutCustomers_comments_customersInput>;

    @Field(() => customers_commentsCreateManyCustomers_comments_customersInputEnvelope, {nullable:true})
    @Type(() => customers_commentsCreateManyCustomers_comments_customersInputEnvelope)
    createMany?: customers_commentsCreateManyCustomers_comments_customersInputEnvelope;

    @Field(() => [customers_commentsWhereUniqueInput], {nullable:true})
    @Type(() => customers_commentsWhereUniqueInput)
    connect?: Array<customers_commentsWhereUniqueInput>;
}

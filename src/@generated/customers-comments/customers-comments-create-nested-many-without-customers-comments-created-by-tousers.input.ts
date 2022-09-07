import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customers_commentsCreateWithoutCustomers_comments_created_byTousersInput } from './customers-comments-create-without-customers-comments-created-by-tousers.input';
import { Type } from 'class-transformer';
import { customers_commentsCreateOrConnectWithoutCustomers_comments_created_byTousersInput } from './customers-comments-create-or-connect-without-customers-comments-created-by-tousers.input';
import { customers_commentsCreateManyCustomers_comments_created_byTousersInputEnvelope } from './customers-comments-create-many-customers-comments-created-by-tousers-input-envelope.input';
import { customers_commentsWhereUniqueInput } from './customers-comments-where-unique.input';

@InputType()
export class customers_commentsCreateNestedManyWithoutCustomers_comments_created_byTousersInput {

    @Field(() => [customers_commentsCreateWithoutCustomers_comments_created_byTousersInput], {nullable:true})
    @Type(() => customers_commentsCreateWithoutCustomers_comments_created_byTousersInput)
    create?: Array<customers_commentsCreateWithoutCustomers_comments_created_byTousersInput>;

    @Field(() => [customers_commentsCreateOrConnectWithoutCustomers_comments_created_byTousersInput], {nullable:true})
    @Type(() => customers_commentsCreateOrConnectWithoutCustomers_comments_created_byTousersInput)
    connectOrCreate?: Array<customers_commentsCreateOrConnectWithoutCustomers_comments_created_byTousersInput>;

    @Field(() => customers_commentsCreateManyCustomers_comments_created_byTousersInputEnvelope, {nullable:true})
    @Type(() => customers_commentsCreateManyCustomers_comments_created_byTousersInputEnvelope)
    createMany?: customers_commentsCreateManyCustomers_comments_created_byTousersInputEnvelope;

    @Field(() => [customers_commentsWhereUniqueInput], {nullable:true})
    @Type(() => customers_commentsWhereUniqueInput)
    connect?: Array<customers_commentsWhereUniqueInput>;
}

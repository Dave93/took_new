import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customers_commentsCreateWithoutCustomers_comments_customersInput } from './customers-comments-create-without-customers-comments-customers.input';
import { Type } from 'class-transformer';
import { customers_commentsCreateOrConnectWithoutCustomers_comments_customersInput } from './customers-comments-create-or-connect-without-customers-comments-customers.input';
import { customers_commentsUpsertWithWhereUniqueWithoutCustomers_comments_customersInput } from './customers-comments-upsert-with-where-unique-without-customers-comments-customers.input';
import { customers_commentsCreateManyCustomers_comments_customersInputEnvelope } from './customers-comments-create-many-customers-comments-customers-input-envelope.input';
import { customers_commentsWhereUniqueInput } from './customers-comments-where-unique.input';
import { customers_commentsUpdateWithWhereUniqueWithoutCustomers_comments_customersInput } from './customers-comments-update-with-where-unique-without-customers-comments-customers.input';
import { customers_commentsUpdateManyWithWhereWithoutCustomers_comments_customersInput } from './customers-comments-update-many-with-where-without-customers-comments-customers.input';
import { customers_commentsScalarWhereInput } from './customers-comments-scalar-where.input';

@InputType()
export class customers_commentsUncheckedUpdateManyWithoutCustomers_comments_customersNestedInput {

    @Field(() => [customers_commentsCreateWithoutCustomers_comments_customersInput], {nullable:true})
    @Type(() => customers_commentsCreateWithoutCustomers_comments_customersInput)
    create?: Array<customers_commentsCreateWithoutCustomers_comments_customersInput>;

    @Field(() => [customers_commentsCreateOrConnectWithoutCustomers_comments_customersInput], {nullable:true})
    @Type(() => customers_commentsCreateOrConnectWithoutCustomers_comments_customersInput)
    connectOrCreate?: Array<customers_commentsCreateOrConnectWithoutCustomers_comments_customersInput>;

    @Field(() => [customers_commentsUpsertWithWhereUniqueWithoutCustomers_comments_customersInput], {nullable:true})
    @Type(() => customers_commentsUpsertWithWhereUniqueWithoutCustomers_comments_customersInput)
    upsert?: Array<customers_commentsUpsertWithWhereUniqueWithoutCustomers_comments_customersInput>;

    @Field(() => customers_commentsCreateManyCustomers_comments_customersInputEnvelope, {nullable:true})
    @Type(() => customers_commentsCreateManyCustomers_comments_customersInputEnvelope)
    createMany?: customers_commentsCreateManyCustomers_comments_customersInputEnvelope;

    @Field(() => [customers_commentsWhereUniqueInput], {nullable:true})
    @Type(() => customers_commentsWhereUniqueInput)
    set?: Array<customers_commentsWhereUniqueInput>;

    @Field(() => [customers_commentsWhereUniqueInput], {nullable:true})
    @Type(() => customers_commentsWhereUniqueInput)
    disconnect?: Array<customers_commentsWhereUniqueInput>;

    @Field(() => [customers_commentsWhereUniqueInput], {nullable:true})
    @Type(() => customers_commentsWhereUniqueInput)
    delete?: Array<customers_commentsWhereUniqueInput>;

    @Field(() => [customers_commentsWhereUniqueInput], {nullable:true})
    @Type(() => customers_commentsWhereUniqueInput)
    connect?: Array<customers_commentsWhereUniqueInput>;

    @Field(() => [customers_commentsUpdateWithWhereUniqueWithoutCustomers_comments_customersInput], {nullable:true})
    @Type(() => customers_commentsUpdateWithWhereUniqueWithoutCustomers_comments_customersInput)
    update?: Array<customers_commentsUpdateWithWhereUniqueWithoutCustomers_comments_customersInput>;

    @Field(() => [customers_commentsUpdateManyWithWhereWithoutCustomers_comments_customersInput], {nullable:true})
    @Type(() => customers_commentsUpdateManyWithWhereWithoutCustomers_comments_customersInput)
    updateMany?: Array<customers_commentsUpdateManyWithWhereWithoutCustomers_comments_customersInput>;

    @Field(() => [customers_commentsScalarWhereInput], {nullable:true})
    @Type(() => customers_commentsScalarWhereInput)
    deleteMany?: Array<customers_commentsScalarWhereInput>;
}

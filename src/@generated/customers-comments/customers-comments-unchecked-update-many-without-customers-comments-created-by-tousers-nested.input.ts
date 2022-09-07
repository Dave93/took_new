import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customers_commentsCreateWithoutCustomers_comments_created_byTousersInput } from './customers-comments-create-without-customers-comments-created-by-tousers.input';
import { Type } from 'class-transformer';
import { customers_commentsCreateOrConnectWithoutCustomers_comments_created_byTousersInput } from './customers-comments-create-or-connect-without-customers-comments-created-by-tousers.input';
import { customers_commentsUpsertWithWhereUniqueWithoutCustomers_comments_created_byTousersInput } from './customers-comments-upsert-with-where-unique-without-customers-comments-created-by-tousers.input';
import { customers_commentsCreateManyCustomers_comments_created_byTousersInputEnvelope } from './customers-comments-create-many-customers-comments-created-by-tousers-input-envelope.input';
import { customers_commentsWhereUniqueInput } from './customers-comments-where-unique.input';
import { customers_commentsUpdateWithWhereUniqueWithoutCustomers_comments_created_byTousersInput } from './customers-comments-update-with-where-unique-without-customers-comments-created-by-tousers.input';
import { customers_commentsUpdateManyWithWhereWithoutCustomers_comments_created_byTousersInput } from './customers-comments-update-many-with-where-without-customers-comments-created-by-tousers.input';
import { customers_commentsScalarWhereInput } from './customers-comments-scalar-where.input';

@InputType()
export class customers_commentsUncheckedUpdateManyWithoutCustomers_comments_created_byTousersNestedInput {

    @Field(() => [customers_commentsCreateWithoutCustomers_comments_created_byTousersInput], {nullable:true})
    @Type(() => customers_commentsCreateWithoutCustomers_comments_created_byTousersInput)
    create?: Array<customers_commentsCreateWithoutCustomers_comments_created_byTousersInput>;

    @Field(() => [customers_commentsCreateOrConnectWithoutCustomers_comments_created_byTousersInput], {nullable:true})
    @Type(() => customers_commentsCreateOrConnectWithoutCustomers_comments_created_byTousersInput)
    connectOrCreate?: Array<customers_commentsCreateOrConnectWithoutCustomers_comments_created_byTousersInput>;

    @Field(() => [customers_commentsUpsertWithWhereUniqueWithoutCustomers_comments_created_byTousersInput], {nullable:true})
    @Type(() => customers_commentsUpsertWithWhereUniqueWithoutCustomers_comments_created_byTousersInput)
    upsert?: Array<customers_commentsUpsertWithWhereUniqueWithoutCustomers_comments_created_byTousersInput>;

    @Field(() => customers_commentsCreateManyCustomers_comments_created_byTousersInputEnvelope, {nullable:true})
    @Type(() => customers_commentsCreateManyCustomers_comments_created_byTousersInputEnvelope)
    createMany?: customers_commentsCreateManyCustomers_comments_created_byTousersInputEnvelope;

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

    @Field(() => [customers_commentsUpdateWithWhereUniqueWithoutCustomers_comments_created_byTousersInput], {nullable:true})
    @Type(() => customers_commentsUpdateWithWhereUniqueWithoutCustomers_comments_created_byTousersInput)
    update?: Array<customers_commentsUpdateWithWhereUniqueWithoutCustomers_comments_created_byTousersInput>;

    @Field(() => [customers_commentsUpdateManyWithWhereWithoutCustomers_comments_created_byTousersInput], {nullable:true})
    @Type(() => customers_commentsUpdateManyWithWhereWithoutCustomers_comments_created_byTousersInput)
    updateMany?: Array<customers_commentsUpdateManyWithWhereWithoutCustomers_comments_created_byTousersInput>;

    @Field(() => [customers_commentsScalarWhereInput], {nullable:true})
    @Type(() => customers_commentsScalarWhereInput)
    deleteMany?: Array<customers_commentsScalarWhereInput>;
}

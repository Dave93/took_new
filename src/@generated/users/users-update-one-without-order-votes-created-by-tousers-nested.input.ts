import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutOrder_votes_created_byTousersInput } from './users-create-without-order-votes-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutOrder_votes_created_byTousersInput } from './users-create-or-connect-without-order-votes-created-by-tousers.input';
import { usersUpsertWithoutOrder_votes_created_byTousersInput } from './users-upsert-without-order-votes-created-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateWithoutOrder_votes_created_byTousersInput } from './users-update-without-order-votes-created-by-tousers.input';

@InputType()
export class usersUpdateOneWithoutOrder_votes_created_byTousersNestedInput {

    @Field(() => usersCreateWithoutOrder_votes_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutOrder_votes_created_byTousersInput)
    create?: usersCreateWithoutOrder_votes_created_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutOrder_votes_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutOrder_votes_created_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutOrder_votes_created_byTousersInput;

    @Field(() => usersUpsertWithoutOrder_votes_created_byTousersInput, {nullable:true})
    @Type(() => usersUpsertWithoutOrder_votes_created_byTousersInput)
    upsert?: usersUpsertWithoutOrder_votes_created_byTousersInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;

    @Field(() => usersUpdateWithoutOrder_votes_created_byTousersInput, {nullable:true})
    @Type(() => usersUpdateWithoutOrder_votes_created_byTousersInput)
    update?: usersUpdateWithoutOrder_votes_created_byTousersInput;
}

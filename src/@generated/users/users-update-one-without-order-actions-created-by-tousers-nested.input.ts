import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutOrder_actions_created_byTousersInput } from './users-create-without-order-actions-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutOrder_actions_created_byTousersInput } from './users-create-or-connect-without-order-actions-created-by-tousers.input';
import { usersUpsertWithoutOrder_actions_created_byTousersInput } from './users-upsert-without-order-actions-created-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateWithoutOrder_actions_created_byTousersInput } from './users-update-without-order-actions-created-by-tousers.input';

@InputType()
export class usersUpdateOneWithoutOrder_actions_created_byTousersNestedInput {

    @Field(() => usersCreateWithoutOrder_actions_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutOrder_actions_created_byTousersInput)
    create?: usersCreateWithoutOrder_actions_created_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutOrder_actions_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutOrder_actions_created_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutOrder_actions_created_byTousersInput;

    @Field(() => usersUpsertWithoutOrder_actions_created_byTousersInput, {nullable:true})
    @Type(() => usersUpsertWithoutOrder_actions_created_byTousersInput)
    upsert?: usersUpsertWithoutOrder_actions_created_byTousersInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;

    @Field(() => usersUpdateWithoutOrder_actions_created_byTousersInput, {nullable:true})
    @Type(() => usersUpdateWithoutOrder_actions_created_byTousersInput)
    update?: usersUpdateWithoutOrder_actions_created_byTousersInput;
}

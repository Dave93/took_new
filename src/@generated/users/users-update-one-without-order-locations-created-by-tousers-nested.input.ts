import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutOrder_locations_created_byTousersInput } from './users-create-without-order-locations-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutOrder_locations_created_byTousersInput } from './users-create-or-connect-without-order-locations-created-by-tousers.input';
import { usersUpsertWithoutOrder_locations_created_byTousersInput } from './users-upsert-without-order-locations-created-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateWithoutOrder_locations_created_byTousersInput } from './users-update-without-order-locations-created-by-tousers.input';

@InputType()
export class usersUpdateOneWithoutOrder_locations_created_byTousersNestedInput {

    @Field(() => usersCreateWithoutOrder_locations_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutOrder_locations_created_byTousersInput)
    create?: usersCreateWithoutOrder_locations_created_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutOrder_locations_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutOrder_locations_created_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutOrder_locations_created_byTousersInput;

    @Field(() => usersUpsertWithoutOrder_locations_created_byTousersInput, {nullable:true})
    @Type(() => usersUpsertWithoutOrder_locations_created_byTousersInput)
    upsert?: usersUpsertWithoutOrder_locations_created_byTousersInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;

    @Field(() => usersUpdateWithoutOrder_locations_created_byTousersInput, {nullable:true})
    @Type(() => usersUpdateWithoutOrder_locations_created_byTousersInput)
    update?: usersUpdateWithoutOrder_locations_created_byTousersInput;
}

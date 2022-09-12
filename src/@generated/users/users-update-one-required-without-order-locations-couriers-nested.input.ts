import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutOrder_locations_couriersInput } from './users-create-without-order-locations-couriers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutOrder_locations_couriersInput } from './users-create-or-connect-without-order-locations-couriers.input';
import { usersUpsertWithoutOrder_locations_couriersInput } from './users-upsert-without-order-locations-couriers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateWithoutOrder_locations_couriersInput } from './users-update-without-order-locations-couriers.input';

@InputType()
export class usersUpdateOneRequiredWithoutOrder_locations_couriersNestedInput {

    @Field(() => usersCreateWithoutOrder_locations_couriersInput, {nullable:true})
    @Type(() => usersCreateWithoutOrder_locations_couriersInput)
    create?: usersCreateWithoutOrder_locations_couriersInput;

    @Field(() => usersCreateOrConnectWithoutOrder_locations_couriersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutOrder_locations_couriersInput)
    connectOrCreate?: usersCreateOrConnectWithoutOrder_locations_couriersInput;

    @Field(() => usersUpsertWithoutOrder_locations_couriersInput, {nullable:true})
    @Type(() => usersUpsertWithoutOrder_locations_couriersInput)
    upsert?: usersUpsertWithoutOrder_locations_couriersInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;

    @Field(() => usersUpdateWithoutOrder_locations_couriersInput, {nullable:true})
    @Type(() => usersUpdateWithoutOrder_locations_couriersInput)
    update?: usersUpdateWithoutOrder_locations_couriersInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_locationsCreateWithoutOrder_locations_created_byTousersInput } from './order-locations-create-without-order-locations-created-by-tousers.input';
import { Type } from 'class-transformer';
import { order_locationsCreateOrConnectWithoutOrder_locations_created_byTousersInput } from './order-locations-create-or-connect-without-order-locations-created-by-tousers.input';
import { order_locationsCreateManyOrder_locations_created_byTousersInputEnvelope } from './order-locations-create-many-order-locations-created-by-tousers-input-envelope.input';
import { order_locationsWhereUniqueInput } from './order-locations-where-unique.input';

@InputType()
export class order_locationsUncheckedCreateNestedManyWithoutOrder_locations_created_byTousersInput {

    @Field(() => [order_locationsCreateWithoutOrder_locations_created_byTousersInput], {nullable:true})
    @Type(() => order_locationsCreateWithoutOrder_locations_created_byTousersInput)
    create?: Array<order_locationsCreateWithoutOrder_locations_created_byTousersInput>;

    @Field(() => [order_locationsCreateOrConnectWithoutOrder_locations_created_byTousersInput], {nullable:true})
    @Type(() => order_locationsCreateOrConnectWithoutOrder_locations_created_byTousersInput)
    connectOrCreate?: Array<order_locationsCreateOrConnectWithoutOrder_locations_created_byTousersInput>;

    @Field(() => order_locationsCreateManyOrder_locations_created_byTousersInputEnvelope, {nullable:true})
    @Type(() => order_locationsCreateManyOrder_locations_created_byTousersInputEnvelope)
    createMany?: order_locationsCreateManyOrder_locations_created_byTousersInputEnvelope;

    @Field(() => [order_locationsWhereUniqueInput], {nullable:true})
    @Type(() => order_locationsWhereUniqueInput)
    connect?: Array<order_locationsWhereUniqueInput>;
}

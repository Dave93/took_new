import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutOrder_locations_created_byTousersInput } from './users-create-without-order-locations-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutOrder_locations_created_byTousersInput } from './users-create-or-connect-without-order-locations-created-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersCreateNestedOneWithoutOrder_locations_created_byTousersInput {

    @Field(() => usersCreateWithoutOrder_locations_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutOrder_locations_created_byTousersInput)
    create?: usersCreateWithoutOrder_locations_created_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutOrder_locations_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutOrder_locations_created_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutOrder_locations_created_byTousersInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;
}

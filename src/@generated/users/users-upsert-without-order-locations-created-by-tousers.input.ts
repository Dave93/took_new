import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutOrder_locations_created_byTousersInput } from './users-update-without-order-locations-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutOrder_locations_created_byTousersInput } from './users-create-without-order-locations-created-by-tousers.input';

@InputType()
export class usersUpsertWithoutOrder_locations_created_byTousersInput {

    @Field(() => usersUpdateWithoutOrder_locations_created_byTousersInput, {nullable:false})
    @Type(() => usersUpdateWithoutOrder_locations_created_byTousersInput)
    update!: usersUpdateWithoutOrder_locations_created_byTousersInput;

    @Field(() => usersCreateWithoutOrder_locations_created_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutOrder_locations_created_byTousersInput)
    create!: usersCreateWithoutOrder_locations_created_byTousersInput;
}

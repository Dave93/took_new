import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class order_locationsUncheckedCreateWithoutOrder_locations_couriersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    order_id!: string;

    @Field(() => String, {nullable:false})
    terminal_id!: string;

    @Field(() => String, {nullable:false})
    order_status_id!: string;

    @Field(() => Float, {nullable:true})
    lat?: number;

    @Field(() => Float, {nullable:true})
    lon?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => String, {nullable:true})
    created_by?: string;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_locationsCreateManyInput } from '../order-locations/order-locations-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyorderLocationsArgs {

    @Field(() => [order_locationsCreateManyInput], {nullable:false})
    @Type(() => order_locationsCreateManyInput)
    data!: Array<order_locationsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

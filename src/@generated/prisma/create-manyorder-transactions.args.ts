import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_transactionsCreateManyInput } from '../order-transactions/order-transactions-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyorderTransactionsArgs {

    @Field(() => [order_transactionsCreateManyInput], {nullable:false})
    @Type(() => order_transactionsCreateManyInput)
    data!: Array<order_transactionsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

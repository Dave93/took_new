import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsCreateManyTerminals_created_byTousersInput } from './terminals-create-many-terminals-created-by-tousers.input';
import { Type } from 'class-transformer';

@InputType()
export class terminalsCreateManyTerminals_created_byTousersInputEnvelope {

    @Field(() => [terminalsCreateManyTerminals_created_byTousersInput], {nullable:false})
    @Type(() => terminalsCreateManyTerminals_created_byTousersInput)
    data!: Array<terminalsCreateManyTerminals_created_byTousersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

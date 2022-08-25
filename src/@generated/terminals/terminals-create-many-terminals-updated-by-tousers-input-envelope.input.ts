import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsCreateManyTerminals_updated_byTousersInput } from './terminals-create-many-terminals-updated-by-tousers.input';
import { Type } from 'class-transformer';

@InputType()
export class terminalsCreateManyTerminals_updated_byTousersInputEnvelope {

    @Field(() => [terminalsCreateManyTerminals_updated_byTousersInput], {nullable:false})
    @Type(() => terminalsCreateManyTerminals_updated_byTousersInput)
    data!: Array<terminalsCreateManyTerminals_updated_byTousersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

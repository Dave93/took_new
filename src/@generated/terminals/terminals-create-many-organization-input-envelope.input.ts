import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsCreateManyOrganizationInput } from './terminals-create-many-organization.input';
import { Type } from 'class-transformer';

@InputType()
export class terminalsCreateManyOrganizationInputEnvelope {

    @Field(() => [terminalsCreateManyOrganizationInput], {nullable:false})
    @Type(() => terminalsCreateManyOrganizationInput)
    data!: Array<terminalsCreateManyOrganizationInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

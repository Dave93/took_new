import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organizationCreateManyOrganization_updated_byTousersInput } from './organization-create-many-organization-updated-by-tousers.input';
import { Type } from 'class-transformer';

@InputType()
export class organizationCreateManyOrganization_updated_byTousersInputEnvelope {

    @Field(() => [organizationCreateManyOrganization_updated_byTousersInput], {nullable:false})
    @Type(() => organizationCreateManyOrganization_updated_byTousersInput)
    data!: Array<organizationCreateManyOrganization_updated_byTousersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

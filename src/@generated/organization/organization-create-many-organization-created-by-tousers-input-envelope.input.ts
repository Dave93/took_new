import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organizationCreateManyOrganization_created_byTousersInput } from './organization-create-many-organization-created-by-tousers.input';
import { Type } from 'class-transformer';

@InputType()
export class organizationCreateManyOrganization_created_byTousersInputEnvelope {

    @Field(() => [organizationCreateManyOrganization_created_byTousersInput], {nullable:false})
    @Type(() => organizationCreateManyOrganization_created_byTousersInput)
    data!: Array<organizationCreateManyOrganization_created_byTousersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

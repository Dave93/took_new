import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutOutside_requests_updated_byTousersInput } from './users-update-without-outside-requests-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutOutside_requests_updated_byTousersInput } from './users-create-without-outside-requests-updated-by-tousers.input';

@InputType()
export class usersUpsertWithoutOutside_requests_updated_byTousersInput {

    @Field(() => usersUpdateWithoutOutside_requests_updated_byTousersInput, {nullable:false})
    @Type(() => usersUpdateWithoutOutside_requests_updated_byTousersInput)
    update!: usersUpdateWithoutOutside_requests_updated_byTousersInput;

    @Field(() => usersCreateWithoutOutside_requests_updated_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutOutside_requests_updated_byTousersInput)
    create!: usersCreateWithoutOutside_requests_updated_byTousersInput;
}

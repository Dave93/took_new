import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutOutside_requests_created_byTousersInput } from './users-update-without-outside-requests-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutOutside_requests_created_byTousersInput } from './users-create-without-outside-requests-created-by-tousers.input';

@InputType()
export class usersUpsertWithoutOutside_requests_created_byTousersInput {

    @Field(() => usersUpdateWithoutOutside_requests_created_byTousersInput, {nullable:false})
    @Type(() => usersUpdateWithoutOutside_requests_created_byTousersInput)
    update!: usersUpdateWithoutOutside_requests_created_byTousersInput;

    @Field(() => usersCreateWithoutOutside_requests_created_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutOutside_requests_created_byTousersInput)
    create!: usersCreateWithoutOutside_requests_created_byTousersInput;
}

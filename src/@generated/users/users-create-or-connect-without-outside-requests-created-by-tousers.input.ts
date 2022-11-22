import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutOutside_requests_created_byTousersInput } from './users-create-without-outside-requests-created-by-tousers.input';

@InputType()
export class usersCreateOrConnectWithoutOutside_requests_created_byTousersInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: usersWhereUniqueInput;

    @Field(() => usersCreateWithoutOutside_requests_created_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutOutside_requests_created_byTousersInput)
    create!: usersCreateWithoutOutside_requests_created_byTousersInput;
}

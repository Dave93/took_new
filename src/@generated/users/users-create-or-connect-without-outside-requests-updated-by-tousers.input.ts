import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutOutside_requests_updated_byTousersInput } from './users-create-without-outside-requests-updated-by-tousers.input';

@InputType()
export class usersCreateOrConnectWithoutOutside_requests_updated_byTousersInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: usersWhereUniqueInput;

    @Field(() => usersCreateWithoutOutside_requests_updated_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutOutside_requests_updated_byTousersInput)
    create!: usersCreateWithoutOutside_requests_updated_byTousersInput;
}

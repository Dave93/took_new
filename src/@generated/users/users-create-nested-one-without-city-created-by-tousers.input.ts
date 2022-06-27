import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutCity_created_byTousersInput } from './users-create-without-city-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutCity_created_byTousersInput } from './users-create-or-connect-without-city-created-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersCreateNestedOneWithoutCity_created_byTousersInput {

    @Field(() => usersCreateWithoutCity_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutCity_created_byTousersInput)
    create?: usersCreateWithoutCity_created_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutCity_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutCity_created_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutCity_created_byTousersInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;
}

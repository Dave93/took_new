import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutCity_updated_byTousersInput } from './users-create-without-city-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutCity_updated_byTousersInput } from './users-create-or-connect-without-city-updated-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersCreateNestedOneWithoutCity_updated_byTousersInput {

    @Field(() => usersCreateWithoutCity_updated_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutCity_updated_byTousersInput)
    create?: usersCreateWithoutCity_updated_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutCity_updated_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutCity_updated_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutCity_updated_byTousersInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;
}

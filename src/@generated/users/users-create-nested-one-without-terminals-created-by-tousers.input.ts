import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutTerminals_created_byTousersInput } from './users-create-without-terminals-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutTerminals_created_byTousersInput } from './users-create-or-connect-without-terminals-created-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersCreateNestedOneWithoutTerminals_created_byTousersInput {

    @Field(() => usersCreateWithoutTerminals_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutTerminals_created_byTousersInput)
    create?: usersCreateWithoutTerminals_created_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutTerminals_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutTerminals_created_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutTerminals_created_byTousersInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;
}

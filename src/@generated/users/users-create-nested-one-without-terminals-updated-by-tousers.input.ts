import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutTerminals_updated_byTousersInput } from './users-create-without-terminals-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutTerminals_updated_byTousersInput } from './users-create-or-connect-without-terminals-updated-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersCreateNestedOneWithoutTerminals_updated_byTousersInput {

    @Field(() => usersCreateWithoutTerminals_updated_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutTerminals_updated_byTousersInput)
    create?: usersCreateWithoutTerminals_updated_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutTerminals_updated_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutTerminals_updated_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutTerminals_updated_byTousersInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutTerminals_created_byTousersInput } from './users-create-without-terminals-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutTerminals_created_byTousersInput } from './users-create-or-connect-without-terminals-created-by-tousers.input';
import { usersUpsertWithoutTerminals_created_byTousersInput } from './users-upsert-without-terminals-created-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateWithoutTerminals_created_byTousersInput } from './users-update-without-terminals-created-by-tousers.input';

@InputType()
export class usersUpdateOneWithoutTerminals_created_byTousersNestedInput {

    @Field(() => usersCreateWithoutTerminals_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutTerminals_created_byTousersInput)
    create?: usersCreateWithoutTerminals_created_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutTerminals_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutTerminals_created_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutTerminals_created_byTousersInput;

    @Field(() => usersUpsertWithoutTerminals_created_byTousersInput, {nullable:true})
    @Type(() => usersUpsertWithoutTerminals_created_byTousersInput)
    upsert?: usersUpsertWithoutTerminals_created_byTousersInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;

    @Field(() => usersUpdateWithoutTerminals_created_byTousersInput, {nullable:true})
    @Type(() => usersUpdateWithoutTerminals_created_byTousersInput)
    update?: usersUpdateWithoutTerminals_created_byTousersInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutTerminals_updated_byTousersInput } from './users-create-without-terminals-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutTerminals_updated_byTousersInput } from './users-create-or-connect-without-terminals-updated-by-tousers.input';
import { usersUpsertWithoutTerminals_updated_byTousersInput } from './users-upsert-without-terminals-updated-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateWithoutTerminals_updated_byTousersInput } from './users-update-without-terminals-updated-by-tousers.input';

@InputType()
export class usersUpdateOneWithoutTerminals_updated_byTousersNestedInput {

    @Field(() => usersCreateWithoutTerminals_updated_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutTerminals_updated_byTousersInput)
    create?: usersCreateWithoutTerminals_updated_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutTerminals_updated_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutTerminals_updated_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutTerminals_updated_byTousersInput;

    @Field(() => usersUpsertWithoutTerminals_updated_byTousersInput, {nullable:true})
    @Type(() => usersUpsertWithoutTerminals_updated_byTousersInput)
    upsert?: usersUpsertWithoutTerminals_updated_byTousersInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;

    @Field(() => usersUpdateWithoutTerminals_updated_byTousersInput, {nullable:true})
    @Type(() => usersUpdateWithoutTerminals_updated_byTousersInput)
    update?: usersUpdateWithoutTerminals_updated_byTousersInput;
}

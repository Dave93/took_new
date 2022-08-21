import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutCity_created_byTousersInput } from './users-create-without-city-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutCity_created_byTousersInput } from './users-create-or-connect-without-city-created-by-tousers.input';
import { usersUpsertWithoutCity_created_byTousersInput } from './users-upsert-without-city-created-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateWithoutCity_created_byTousersInput } from './users-update-without-city-created-by-tousers.input';

@InputType()
export class usersUpdateOneWithoutCity_created_byTousersNestedInput {

    @Field(() => usersCreateWithoutCity_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutCity_created_byTousersInput)
    create?: usersCreateWithoutCity_created_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutCity_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutCity_created_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutCity_created_byTousersInput;

    @Field(() => usersUpsertWithoutCity_created_byTousersInput, {nullable:true})
    @Type(() => usersUpsertWithoutCity_created_byTousersInput)
    upsert?: usersUpsertWithoutCity_created_byTousersInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;

    @Field(() => usersUpdateWithoutCity_created_byTousersInput, {nullable:true})
    @Type(() => usersUpdateWithoutCity_created_byTousersInput)
    update?: usersUpdateWithoutCity_created_byTousersInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutCity_updated_byTousersInput } from './users-create-without-city-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutCity_updated_byTousersInput } from './users-create-or-connect-without-city-updated-by-tousers.input';
import { usersUpsertWithoutCity_updated_byTousersInput } from './users-upsert-without-city-updated-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateWithoutCity_updated_byTousersInput } from './users-update-without-city-updated-by-tousers.input';

@InputType()
export class usersUpdateOneWithoutCity_updated_byTousersInput {

    @Field(() => usersCreateWithoutCity_updated_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutCity_updated_byTousersInput)
    create?: usersCreateWithoutCity_updated_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutCity_updated_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutCity_updated_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutCity_updated_byTousersInput;

    @Field(() => usersUpsertWithoutCity_updated_byTousersInput, {nullable:true})
    @Type(() => usersUpsertWithoutCity_updated_byTousersInput)
    upsert?: usersUpsertWithoutCity_updated_byTousersInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;

    @Field(() => usersUpdateWithoutCity_updated_byTousersInput, {nullable:true})
    @Type(() => usersUpdateWithoutCity_updated_byTousersInput)
    update?: usersUpdateWithoutCity_updated_byTousersInput;
}

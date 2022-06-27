import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { cityCreateWithoutCity_parent_idTocityInput } from './city-create-without-city-parent-id-tocity.input';
import { Type } from 'class-transformer';
import { cityCreateOrConnectWithoutCity_parent_idTocityInput } from './city-create-or-connect-without-city-parent-id-tocity.input';
import { cityUpsertWithoutCity_parent_idTocityInput } from './city-upsert-without-city-parent-id-tocity.input';
import { cityWhereUniqueInput } from './city-where-unique.input';
import { cityUpdateWithoutCity_parent_idTocityInput } from './city-update-without-city-parent-id-tocity.input';

@InputType()
export class cityUpdateOneWithoutCity_parent_idTocityInput {

    @Field(() => cityCreateWithoutCity_parent_idTocityInput, {nullable:true})
    @Type(() => cityCreateWithoutCity_parent_idTocityInput)
    create?: cityCreateWithoutCity_parent_idTocityInput;

    @Field(() => cityCreateOrConnectWithoutCity_parent_idTocityInput, {nullable:true})
    @Type(() => cityCreateOrConnectWithoutCity_parent_idTocityInput)
    connectOrCreate?: cityCreateOrConnectWithoutCity_parent_idTocityInput;

    @Field(() => cityUpsertWithoutCity_parent_idTocityInput, {nullable:true})
    @Type(() => cityUpsertWithoutCity_parent_idTocityInput)
    upsert?: cityUpsertWithoutCity_parent_idTocityInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => cityWhereUniqueInput, {nullable:true})
    @Type(() => cityWhereUniqueInput)
    connect?: cityWhereUniqueInput;

    @Field(() => cityUpdateWithoutCity_parent_idTocityInput, {nullable:true})
    @Type(() => cityUpdateWithoutCity_parent_idTocityInput)
    update?: cityUpdateWithoutCity_parent_idTocityInput;
}

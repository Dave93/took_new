import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { cityCreateWithoutCity_parent_idTocityInput } from './city-create-without-city-parent-id-tocity.input';
import { Type } from 'class-transformer';
import { cityCreateOrConnectWithoutCity_parent_idTocityInput } from './city-create-or-connect-without-city-parent-id-tocity.input';
import { cityWhereUniqueInput } from './city-where-unique.input';

@InputType()
export class cityCreateNestedOneWithoutCity_parent_idTocityInput {

    @Field(() => cityCreateWithoutCity_parent_idTocityInput, {nullable:true})
    @Type(() => cityCreateWithoutCity_parent_idTocityInput)
    create?: cityCreateWithoutCity_parent_idTocityInput;

    @Field(() => cityCreateOrConnectWithoutCity_parent_idTocityInput, {nullable:true})
    @Type(() => cityCreateOrConnectWithoutCity_parent_idTocityInput)
    connectOrCreate?: cityCreateOrConnectWithoutCity_parent_idTocityInput;

    @Field(() => cityWhereUniqueInput, {nullable:true})
    @Type(() => cityWhereUniqueInput)
    connect?: cityWhereUniqueInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { post_prop_typesCreateWithoutUsers_post_prop_types_updated_byTousersInput } from './post-prop-types-create-without-users-post-prop-types-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { post_prop_typesCreateOrConnectWithoutUsers_post_prop_types_updated_byTousersInput } from './post-prop-types-create-or-connect-without-users-post-prop-types-updated-by-tousers.input';
import { post_prop_typesCreateManyUsers_post_prop_types_updated_byTousersInputEnvelope } from './post-prop-types-create-many-users-post-prop-types-updated-by-tousers-input-envelope.input';
import { post_prop_typesWhereUniqueInput } from './post-prop-types-where-unique.input';

@InputType()
export class post_prop_typesUncheckedCreateNestedManyWithoutUsers_post_prop_types_updated_byTousersInput {

    @Field(() => [post_prop_typesCreateWithoutUsers_post_prop_types_updated_byTousersInput], {nullable:true})
    @Type(() => post_prop_typesCreateWithoutUsers_post_prop_types_updated_byTousersInput)
    create?: Array<post_prop_typesCreateWithoutUsers_post_prop_types_updated_byTousersInput>;

    @Field(() => [post_prop_typesCreateOrConnectWithoutUsers_post_prop_types_updated_byTousersInput], {nullable:true})
    @Type(() => post_prop_typesCreateOrConnectWithoutUsers_post_prop_types_updated_byTousersInput)
    connectOrCreate?: Array<post_prop_typesCreateOrConnectWithoutUsers_post_prop_types_updated_byTousersInput>;

    @Field(() => post_prop_typesCreateManyUsers_post_prop_types_updated_byTousersInputEnvelope, {nullable:true})
    @Type(() => post_prop_typesCreateManyUsers_post_prop_types_updated_byTousersInputEnvelope)
    createMany?: post_prop_typesCreateManyUsers_post_prop_types_updated_byTousersInputEnvelope;

    @Field(() => [post_prop_typesWhereUniqueInput], {nullable:true})
    @Type(() => post_prop_typesWhereUniqueInput)
    connect?: Array<post_prop_typesWhereUniqueInput>;
}

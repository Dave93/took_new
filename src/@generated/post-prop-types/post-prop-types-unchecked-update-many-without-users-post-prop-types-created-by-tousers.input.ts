import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { post_prop_typesCreateWithoutUsers_post_prop_types_created_byTousersInput } from './post-prop-types-create-without-users-post-prop-types-created-by-tousers.input';
import { Type } from 'class-transformer';
import { post_prop_typesCreateOrConnectWithoutUsers_post_prop_types_created_byTousersInput } from './post-prop-types-create-or-connect-without-users-post-prop-types-created-by-tousers.input';
import { post_prop_typesUpsertWithWhereUniqueWithoutUsers_post_prop_types_created_byTousersInput } from './post-prop-types-upsert-with-where-unique-without-users-post-prop-types-created-by-tousers.input';
import { post_prop_typesCreateManyUsers_post_prop_types_created_byTousersInputEnvelope } from './post-prop-types-create-many-users-post-prop-types-created-by-tousers-input-envelope.input';
import { post_prop_typesWhereUniqueInput } from './post-prop-types-where-unique.input';
import { post_prop_typesUpdateWithWhereUniqueWithoutUsers_post_prop_types_created_byTousersInput } from './post-prop-types-update-with-where-unique-without-users-post-prop-types-created-by-tousers.input';
import { post_prop_typesUpdateManyWithWhereWithoutUsers_post_prop_types_created_byTousersInput } from './post-prop-types-update-many-with-where-without-users-post-prop-types-created-by-tousers.input';
import { post_prop_typesScalarWhereInput } from './post-prop-types-scalar-where.input';

@InputType()
export class post_prop_typesUncheckedUpdateManyWithoutUsers_post_prop_types_created_byTousersInput {

    @Field(() => [post_prop_typesCreateWithoutUsers_post_prop_types_created_byTousersInput], {nullable:true})
    @Type(() => post_prop_typesCreateWithoutUsers_post_prop_types_created_byTousersInput)
    create?: Array<post_prop_typesCreateWithoutUsers_post_prop_types_created_byTousersInput>;

    @Field(() => [post_prop_typesCreateOrConnectWithoutUsers_post_prop_types_created_byTousersInput], {nullable:true})
    @Type(() => post_prop_typesCreateOrConnectWithoutUsers_post_prop_types_created_byTousersInput)
    connectOrCreate?: Array<post_prop_typesCreateOrConnectWithoutUsers_post_prop_types_created_byTousersInput>;

    @Field(() => [post_prop_typesUpsertWithWhereUniqueWithoutUsers_post_prop_types_created_byTousersInput], {nullable:true})
    @Type(() => post_prop_typesUpsertWithWhereUniqueWithoutUsers_post_prop_types_created_byTousersInput)
    upsert?: Array<post_prop_typesUpsertWithWhereUniqueWithoutUsers_post_prop_types_created_byTousersInput>;

    @Field(() => post_prop_typesCreateManyUsers_post_prop_types_created_byTousersInputEnvelope, {nullable:true})
    @Type(() => post_prop_typesCreateManyUsers_post_prop_types_created_byTousersInputEnvelope)
    createMany?: post_prop_typesCreateManyUsers_post_prop_types_created_byTousersInputEnvelope;

    @Field(() => [post_prop_typesWhereUniqueInput], {nullable:true})
    @Type(() => post_prop_typesWhereUniqueInput)
    set?: Array<post_prop_typesWhereUniqueInput>;

    @Field(() => [post_prop_typesWhereUniqueInput], {nullable:true})
    @Type(() => post_prop_typesWhereUniqueInput)
    disconnect?: Array<post_prop_typesWhereUniqueInput>;

    @Field(() => [post_prop_typesWhereUniqueInput], {nullable:true})
    @Type(() => post_prop_typesWhereUniqueInput)
    delete?: Array<post_prop_typesWhereUniqueInput>;

    @Field(() => [post_prop_typesWhereUniqueInput], {nullable:true})
    @Type(() => post_prop_typesWhereUniqueInput)
    connect?: Array<post_prop_typesWhereUniqueInput>;

    @Field(() => [post_prop_typesUpdateWithWhereUniqueWithoutUsers_post_prop_types_created_byTousersInput], {nullable:true})
    @Type(() => post_prop_typesUpdateWithWhereUniqueWithoutUsers_post_prop_types_created_byTousersInput)
    update?: Array<post_prop_typesUpdateWithWhereUniqueWithoutUsers_post_prop_types_created_byTousersInput>;

    @Field(() => [post_prop_typesUpdateManyWithWhereWithoutUsers_post_prop_types_created_byTousersInput], {nullable:true})
    @Type(() => post_prop_typesUpdateManyWithWhereWithoutUsers_post_prop_types_created_byTousersInput)
    updateMany?: Array<post_prop_typesUpdateManyWithWhereWithoutUsers_post_prop_types_created_byTousersInput>;

    @Field(() => [post_prop_typesScalarWhereInput], {nullable:true})
    @Type(() => post_prop_typesScalarWhereInput)
    deleteMany?: Array<post_prop_typesScalarWhereInput>;
}

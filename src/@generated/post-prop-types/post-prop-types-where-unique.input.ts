import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class post_prop_typesWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;
}

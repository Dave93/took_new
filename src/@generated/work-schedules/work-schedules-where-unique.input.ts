import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class work_schedulesWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;
}

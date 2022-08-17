import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class migrationsCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    timestamp!: bigint | number;

    @Field(() => String, {nullable:false})
    name!: string;
}

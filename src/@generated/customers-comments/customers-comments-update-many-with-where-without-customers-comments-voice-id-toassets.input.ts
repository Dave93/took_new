import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customers_commentsScalarWhereInput } from './customers-comments-scalar-where.input';
import { Type } from 'class-transformer';
import { customers_commentsUpdateManyMutationInput } from './customers-comments-update-many-mutation.input';

@InputType()
export class customers_commentsUpdateManyWithWhereWithoutCustomers_comments_voice_idToassetsInput {

    @Field(() => customers_commentsScalarWhereInput, {nullable:false})
    @Type(() => customers_commentsScalarWhereInput)
    where!: customers_commentsScalarWhereInput;

    @Field(() => customers_commentsUpdateManyMutationInput, {nullable:false})
    @Type(() => customers_commentsUpdateManyMutationInput)
    data!: customers_commentsUpdateManyMutationInput;
}

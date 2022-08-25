import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutTerminals_created_byTousersInput } from './users-update-without-terminals-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutTerminals_created_byTousersInput } from './users-create-without-terminals-created-by-tousers.input';

@InputType()
export class usersUpsertWithoutTerminals_created_byTousersInput {

    @Field(() => usersUpdateWithoutTerminals_created_byTousersInput, {nullable:false})
    @Type(() => usersUpdateWithoutTerminals_created_byTousersInput)
    update!: usersUpdateWithoutTerminals_created_byTousersInput;

    @Field(() => usersCreateWithoutTerminals_created_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutTerminals_created_byTousersInput)
    create!: usersCreateWithoutTerminals_created_byTousersInput;
}

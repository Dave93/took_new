import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutTerminals_updated_byTousersInput } from './users-update-without-terminals-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutTerminals_updated_byTousersInput } from './users-create-without-terminals-updated-by-tousers.input';

@InputType()
export class usersUpsertWithoutTerminals_updated_byTousersInput {

    @Field(() => usersUpdateWithoutTerminals_updated_byTousersInput, {nullable:false})
    @Type(() => usersUpdateWithoutTerminals_updated_byTousersInput)
    update!: usersUpdateWithoutTerminals_updated_byTousersInput;

    @Field(() => usersCreateWithoutTerminals_updated_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutTerminals_updated_byTousersInput)
    create!: usersCreateWithoutTerminals_updated_byTousersInput;
}

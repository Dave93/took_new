import { CreateLinkRecordInput } from './create-link_record.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLinkRecordInput extends PartialType(CreateLinkRecordInput) {
  @Field(() => Int)
  id: number;
}

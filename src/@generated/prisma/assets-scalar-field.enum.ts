import { registerEnumType } from '@nestjs/graphql';

export enum AssetsScalarFieldEnum {
    id = "id",
    model = "model",
    file_name = "file_name",
    model_id = "model_id",
    sub_folder = "sub_folder"
}


registerEnumType(AssetsScalarFieldEnum, { name: 'AssetsScalarFieldEnum', description: undefined })

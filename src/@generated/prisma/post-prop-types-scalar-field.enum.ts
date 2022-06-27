import { registerEnumType } from '@nestjs/graphql';

export enum Post_prop_typesScalarFieldEnum {
    id = "id",
    sale_type = "sale_type",
    name = "name",
    type = "type",
    created_at = "created_at",
    updated_at = "updated_at",
    created_by = "created_by",
    updated_by = "updated_by"
}


registerEnumType(Post_prop_typesScalarFieldEnum, { name: 'Post_prop_typesScalarFieldEnum', description: undefined })

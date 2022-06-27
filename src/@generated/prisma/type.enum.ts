import { registerEnumType } from '@nestjs/graphql';

export enum type {
    string = "string",
    integer = "integer",
    float = "float",
    boolean = "boolean",
    date = "date",
    datetime = "datetime",
    'enum' = "enum",
    json = "json"
}


registerEnumType(type, { name: 'type', description: undefined })

import { registerEnumType } from '@nestjs/graphql';

export enum MigrationsScalarFieldEnum {
    id = "id",
    timestamp = "timestamp",
    name = "name"
}


registerEnumType(MigrationsScalarFieldEnum, { name: 'MigrationsScalarFieldEnum', description: undefined })

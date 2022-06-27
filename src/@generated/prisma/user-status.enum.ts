import { registerEnumType } from '@nestjs/graphql';

export enum user_status {
    active = "active",
    blocked = "blocked",
    inactive = "inactive"
}


registerEnumType(user_status, { name: 'user_status', description: undefined })

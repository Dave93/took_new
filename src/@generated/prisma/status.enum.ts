import { registerEnumType } from '@nestjs/graphql';

export enum status {
    draft = "draft",
    published = "published",
    archived = "archived"
}


registerEnumType(status, { name: 'status', description: undefined })

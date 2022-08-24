import { registerEnumType } from '@nestjs/graphql';

export enum drive_type {
    car = "car",
    bike = "bike",
    foot = "foot"
}


registerEnumType(drive_type, { name: 'drive_type', description: undefined })

import { registerEnumType } from '@nestjs/graphql';

export enum drive_type {
    car = "car",
    bike = "bike",
    floot = "floot"
}


registerEnumType(drive_type, { name: 'drive_type', description: undefined })

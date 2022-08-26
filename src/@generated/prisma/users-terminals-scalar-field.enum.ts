import { registerEnumType } from '@nestjs/graphql';

export enum Users_terminalsScalarFieldEnum {
    user_id = "user_id",
    terminal_id = "terminal_id"
}


registerEnumType(Users_terminalsScalarFieldEnum, { name: 'Users_terminalsScalarFieldEnum', description: undefined })

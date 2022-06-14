import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import addAssignedFields from '@database/user_assign';

const tableName = 'roles_permissions';
const permissionsTableName = 'permissions';
const rolesTableName = 'roles';

export class CreateRolesPermissionsTable_1609619240084 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: tableName,
        columns: [
          {
            name: 'role_id',
            type: 'integer',
            isPrimary: true,
            isNullable: false,
          },
          {
            name: 'permission_id',
            type: 'integer',
            isPrimary: true,
            isNullable: false,
          },
        ],
        foreignKeys: [
          {
            columnNames: ['role_id'],
            referencedColumnNames: ['id'],
            referencedTableName: rolesTableName,
            onUpdate: 'CASCADE',
          },
          {
            columnNames: ['permission_id'],
            referencedColumnNames: ['id'],
            referencedTableName: permissionsTableName,
            onUpdate: 'CASCADE',
          },
        ],
      }),
      true,
    );

    await addAssignedFields(queryRunner, tableName);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    //If table has foreingn keys, third parameter must to be true
    await queryRunner.dropTable(tableName, true, true);
  }
}

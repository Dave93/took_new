import { TableColumn } from "typeorm";

const usersTableName = 'admin.users';

const addAssignedFields = async (queryRunner, tableName) => {
  await queryRunner.addColumn(tableName, new TableColumn({
    name: 'created_by',
    type: 'uuid',
    isNullable: true,
  }));
  await queryRunner.addColumn(tableName, new TableColumn({
    name: 'updated_by',
    type: 'uuid',
    isNullable: true,
  }));

  await queryRunner.createForeignKeys([
    {
      columnNames: ['created_by'],
      referencedColumnNames: ['id'],
      referencedTableName: usersTableName,
      onUpdate: 'CASCADE',
    },
    {
      columnNames: ['updated_by'],
      referencedColumnNames: ['id'],
      referencedTableName: usersTableName,
      onUpdate: 'CASCADE',
    },
  ]);
};


export default addAssignedFields;
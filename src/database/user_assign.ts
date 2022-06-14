import { TableColumn, TableForeignKey } from 'typeorm';

const usersTableName = 'users';

const addAssignedFields = async (queryRunner, tableName) => {
  await queryRunner.addColumn(
    tableName,
    new TableColumn({
      name: 'created_by',
      type: 'uuid',
      isNullable: true,
    }),
  );
  await queryRunner.addColumn(
    tableName,
    new TableColumn({
      name: 'updated_by',
      type: 'uuid',
      isNullable: true,
    }),
  );

  // await queryRunner.createForeignKeys([
  //   {
  //     columnNames: ['created_by'],
  //     referencedColumnNames: ['id'],
  //     referencedTableName: usersTableName,
  //     onUpdate: 'CASCADE',
  //   },
  //   {
  //     columnNames: ['updated_by'],
  //     referencedColumnNames: ['id'],
  //     referencedTableName: usersTableName,
  //     onUpdate: 'CASCADE',
  //   },
  // ]);
  // clear sqls in memory to avoid removing tables when down queries executed.
  queryRunner.clearSqlMemory();

  const createdByForeignKey = new TableForeignKey({
    columnNames: ['created_by'],
    referencedColumnNames: ['id'],
    referencedTableName: usersTableName,
    onUpdate: 'CASCADE',
  });
  await queryRunner.createForeignKey(tableName, createdByForeignKey);

  const foreignKey = new TableForeignKey({
    columnNames: ['updated_by'],
    referencedColumnNames: ['id'],
    referencedTableName: usersTableName,
    onUpdate: 'CASCADE',
  });
  await queryRunner.createForeignKey(tableName, foreignKey);
};

export default addAssignedFields;

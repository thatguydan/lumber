const mysql = [
  {
    tableName: 'addresses',
    columnName: 'user_id',
    constraintName: 'PRIMARY',
    foreignTableName: null,
    foreignColumnName: null,
  },
  {
    tableName: 'addresses',
    columnName: 'city',
    constraintName: 'city',
    foreignTableName: null,
    foreignColumnName: null,
  },
  {
    tableName: 'addresses',
    columnName: 'user_id',
    constraintName: 'fk_user_id',
    foreignTableName: 'users',
    foreignColumnName: 'id',
  },
];

const postgres = [
  {
    constraintName: 'addresses_city_key',
    tableName: 'addresses',
    columnType: 'UNIQUE',
    columnName: 'city',
    foreignTableName: 'addresses',
    foreignColumnName: 'city',
    uniqueIndexes: [['city']],
  },
  {
    constraintName: 'addresses_customers_id_fk',
    tableName: 'addresses',
    columnType: 'FOREIGN KEY',
    columnName: 'customer_id',
    foreignTableName: 'customers',
    foreignColumnName: 'id',
    uniqueIndexes: [['city']],
  },
  {
    constraintName: 'addresses_pkey',
    tableName: 'addresses',
    columnType: 'PRIMARY KEY',
    columnName: 'user_id',
    foreignTableName: 'addresses',
    foreignColumnName: 'user_id',
    uniqueIndexes: [['city']],
  },
  {
    constraintName: 'fk_user_id',
    tableName: 'addresses',
    columnType: 'FOREIGN KEY',
    columnName: 'user_id',
    foreignTableName: 'users',
    foreignColumnName: 'id',
    uniqueIndexes: [['city']],
  },
];

module.exports = { mysql, postgres };

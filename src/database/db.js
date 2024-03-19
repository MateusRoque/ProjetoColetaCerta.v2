import SQLite from 'react-native-sqlite-storage';

// Abrir o banco de dados SQLite
const db = SQLite.openDatabase(
  {name: 'coletacerta.db', location: 'default'},
  () => {},
  error => {
    console.error('Erro ao abrir o banco de dados: ', error);
  }
);

// Executar uma consulta SQL
db.transaction(tx => {
  tx.executeSql('CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, password)',
    [],
    () => {console.log('Tabela criada com sucesso!')},
    error => {console.error('Erro ao criar a tabela: ', error)}
  )
});

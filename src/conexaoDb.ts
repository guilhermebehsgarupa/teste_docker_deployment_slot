import { Sequelize } from 'sequelize';

const conexao = new Sequelize('postgres', 'postgres', '150158', {
  host: 'banco',
  port: 5432,
  dialect:  'postgres' 
});
/*
const testarConexao = async()=>{
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
*/

export default conexao;
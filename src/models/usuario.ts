import { Sequelize, DataTypes, Model } from 'sequelize';
import conexao from '../conexaoDb';

class Usuario extends Model {}

Usuario.init({
  // Model attributes are defined here
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  sobrenome: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
  tableName: 'usuario',
  sequelize:conexao, // We need to pass the connection instance
  modelName: 'Usuario' // We need to choose the model name
});

export default Usuario;

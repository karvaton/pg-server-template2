import sequelize from '../db.js';
import { Sequelize } from "sequelize";
const { DataTypes } = Sequelize;

const Users = sequelize.define('users', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, allowNull: false},
    login: {type: DataTypes.STRING, primaryKey: true, unique: true, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    available_wms: {type: DataTypes.TEXT, allowNull: false, defaultValue: '[]'},
    selectable_wms: {type: DataTypes.TEXT, allowNull: false, defaultValue: '[]'},
    editable_wms: {type: DataTypes.TEXT, allowNull: false, defaultValue: '[]'},
    email: {type: DataTypes.STRING},
    parameters: {type: DataTypes.TEXT},
    print: {type: DataTypes.BOOLEAN},
    filter: {type: DataTypes.STRING, allowNull: false, defaultValue: '{}'},
    db_conn: {type: DataTypes.STRING},
});

// const UserData = sequelize.define('userData', {
//     lid: {type: DataTypes.CHAR, length: 10, primaryKey: true, unique: true},
//     layer_name: {type: DataTypes.STRING, allowNull: false},
//     workspace: {type: DataTypes.STRING, defaultValue: ''},
//     title: {type: DataTypes.STRING, defaultValue: ''},
//     access: {type: DataTypes.STRING, defaultValue: 'availble'},
//     parameters: {type: DataTypes.TEXT, defaultValue: ''},
//     filters: {type: DataTypes.TEXT, defaultValue: ''},
//     style: {type: DataTypes.CHAR, length: 100, defaultValue: ''},
// });

// Users.hasMany(UserData);
// UserData.belongsTo(Users);

const models = {
    Users, 
    // UserData
}

export default models;
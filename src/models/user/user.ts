import { DataTypes } from 'sequelize';
import { conn } from '../db';

export const User = conn.define('User', {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true

    },
    name: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.SMALLINT
    },
    semester: {
        type: DataTypes.SMALLINT
    }
})
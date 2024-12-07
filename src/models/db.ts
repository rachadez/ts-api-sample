import { Sequelize } from 'sequelize';

export const conn = new Sequelize('rachadez', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
    logging: console.log
})

export const startDatabase = async () => {
    await conn.sync({ force: true , alter: true });
}

export * from './db';
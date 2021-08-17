import dotenv from 'dotenv';
dotenv.config();
import { Sequelize } from "sequelize";

export default new Sequelize(
    process.env.DBNAME,
    process.env.PGUSER,
    process.env.PGPASSWORD,
    {
        dialect: "postgres",
        host: process.env.PGHOST,
        port: process.env.PGPORT || 5432,
        schema: process.env.PGSCHEMA || 'public',
    }
);
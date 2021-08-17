import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import sequelize from './db.js';
import models from './models/models.js';
import router from './routes/index.js';
import erroreHandler from './middleware/ErrorHandler.js';


const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors());
app.use('/', router);

// обробка помилок
app.use(erroreHandler);

async function start() {
    try {
        sequelize.authenticate();
        sequelize.sync();
        app.listen(port, () => console.log("Server starting on port " + port));
    } catch (err) {
        console.log(err);
    }
}

start();
require('dotenv').config();

const cors = require('cors');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./router');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: 'localhost',
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
});

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);

const connectToDB = async (callback) => {
    await sequelize.authenticate();
    callback();
}

app.listen(PORT, () => connectToDB(() => console.log(`Server is running on ${PORT}`)));
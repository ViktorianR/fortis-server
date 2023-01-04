require('dotenv').config();

const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./router');
const sequelize = require('./db');
const models = require('./models/models');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);

const connectToDB = async () => {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log(`Server is running on ${PORT}`);
};

app.listen(PORT, () => connectToDB());
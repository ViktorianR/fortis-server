require('dotenv').config();

const cors = require('cors');
const express = require('express');
const app = express();
const routes = require('./router');

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
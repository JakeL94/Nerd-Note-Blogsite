require('dotenv').config()
const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });
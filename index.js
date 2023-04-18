const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('bodyParser');
const helmet = require('helmet');
const cors = require('cors');
const app = express();
const { PORT = 3000 } = process.env;
app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
}) ;
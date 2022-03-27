const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
// const dotenv = ('dotenv');
// dotenv.config()

// initialize express
const app = express()

// registerRoutes
const allRoutes = require('./routes');

// middle wares
app.use(logger('dev'))
app.use(express.json({ extended: false }))
app.use(express.urlencoded({ extended: false }));

app.use('/', allRoutes);

// create and listen
const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`server running on port *${PORT}`))
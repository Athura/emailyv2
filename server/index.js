const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

// same as const passportConfig = require('./services/passport')
require('./models/User');
require('./services/passport');


mongoose.connect(keys.mongoURI);


const app = express();

// lesson 28
require('./routes/authRoutes')(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT);
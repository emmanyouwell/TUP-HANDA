const express = require('express');
const app = express();
const cookie = require('cookie-parser');
const cors = require('cors')

// const products = require('./routes/product');
const auth = require('./routes/auth');
const check = require('./routes/checklist');
const dept = require('./routes/department');
const course = require('./routes/course')
app.use(cors(
    {
        origin: ["http://localhost:5173", "https://tuphanda.onrender.com"],
        credentials: true
    }
))
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({limit: '50mb', extended: true}))  
app.use(cookie())

// app.use('/api/v1',products);
app.use('/api/v1', auth);
app.use('/api/v1',check);
app.use('/api/v1',dept);
app.use('/api/v1',course);
module.exports = app;
const dotenv = require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./helpers/db')
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const fileUpload = require('express-fileupload');


const app = express();


app.use(express.json())
app.use(fileUpload({}))
app.use(cors())
app.use(express.static('static'))
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json());
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});
const PORT = process.env.PORT || "3000"
const start = async () => {
    try {
        db()
        app.listen(PORT, () => {
            console.log(`Portimiz ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()

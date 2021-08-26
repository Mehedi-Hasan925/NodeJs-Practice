// core modules(fs,path,http,https,os)

const http = require('http');

const path = require('path')
const express = require('express');
const db = require('./util/database')


// const bodyParser = require('body-parser');

const app = express();
app.use(express.static(path.join(__dirname,"public"))) //accessible publicly for all files


app.set('view engine','ejs');
app.set('views','views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error');


app.use(express.urlencoded({extended:false}));
app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404)

app.listen(3000);
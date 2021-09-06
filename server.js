// core modules(fs,path,http,https,os)

const http = require('http');

const path = require('path')
const express = require('express');
const mongoConnect = require('./util/database').mongoConnect;
const User = require('./models/User');

//models
// const ProductsTable = require('./models/products');
// const UserTable = require('./models/User');


// const bodyParser = require('body-parser');

const app = express();
app.use(express.static(path.join(__dirname,"public"))) //accessible publicly for all files


app.set('view engine','ejs');
app.set('views','views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error');
const { ObjectId } = require('bson');


app.use(express.urlencoded({extended:false}));
app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use((req,res,next)=>{
    User.findById('613659d63fcb224d4b5b1514')
        .then((user)=>{
            req.user = user;
            console.log(req.user);
            next();
        })
        .catch(err=>{
            console.log(err);
        })
    
})

app.use(errorController.get404)


mongoConnect(()=>{
    // if()
    app.listen(3000);
})
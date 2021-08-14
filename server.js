// core modules(fs,path,http,https,os)

const http = require('http');

const path = require('path')
const express = require('express');


// const bodyParser = require('body-parser');

const app = express();
app.use(express.static(path.join(__dirname,"public"))) //accessible publicly for all files


app.set('view engine','ejs');
app.set('views','views');

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop');



app.use(express.urlencoded({extended:false}));
app.use('/admin',adminData.routes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    // res.status(404).sendFile(path.join(__dirname,'views','404.html'));
    res.render('404',{title:"page not found"})
})

app.listen(3000);
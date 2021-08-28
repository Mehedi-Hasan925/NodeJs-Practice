// core modules(fs,path,http,https,os)

const http = require('http');

const path = require('path')
const express = require('express');
const sequalizeConnection = require('./util/database')

//models
const ProductsTable = require('./models/products');
const UserTable = require('./models/User');


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
app.use((req,res,next)=>{
    UserTable.findByPk(1)
        .then((user)=>{
            req.user = user;
            console.log(req.user.id);
            next()
        })
        .catch(err=>{
            console.log(err);
        })
})

app.use(errorController.get404)


ProductsTable.belongsTo(UserTable,{constraints:true,onDelete:'CASCADE'})
UserTable.hasMany(ProductsTable)

sequalizeConnection.sync()
    .then(()=>{
        return UserTable.findByPk(1)
        
    })
        .then((user)=>{
            if(!user){
               return UserTable.create({Name:'Mehedi',email:'mehedi.cse14bu@gmail.com'});
            }
            return user
        })
            .then(()=>{
                app.listen(3000);
            })
            .catch(err=>{
                console.log(err);
            })
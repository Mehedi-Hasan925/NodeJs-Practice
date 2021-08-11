const express = require('express')
const router = express.Router()

router.get("/add-product",(req,res,next)=>{
    res.send('<form action="/add-product" method="POST"><input type="text" name="add"><input type="submit" value="add product"></form>');
});

router.post("/add-product",(req,res,next)=>{
   console.log(req.body);
    res.redirect('/')
});

module.exports = router;
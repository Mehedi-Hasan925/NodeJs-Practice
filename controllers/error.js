exports.get404 = (req,res,next)=>{
    // res.status(404).sendFile(path.join(__dirname,'views','404.html'));
    res.render('shop/404',{title:"page not found"})
}
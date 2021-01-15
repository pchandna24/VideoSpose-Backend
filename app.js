const express = require('express');
const app = express();
const mongoose = require('mongoose');

const dbURI ='mongodb+srv://databoy:helloworld@videospose.wl3c6.mongodb.net/user?retryWrites=true&w=majority';
mongoose.connect(dbURI);


//ROUTES
app.get('/',(req,res)=>{
    res.send("we are home");
});
app.get('/posts',(req,res)=>{
    res.send("posts");
});

//db connection







app.listen(3000);
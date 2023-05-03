//nodemon detects the changes in the directory and refreshes the server
const http = require('http')
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:false}))

app.use("/chill",(req,res,next) => {
    res.send('<form action="/course" method="POST"><input type="text" name="title"><button type="submit">Submit</button></form>')
})

app.use("/course",(req,res,next) => {
    console.log(req.body);
    res.redirect("/")
})

app.use("/",(req,res,next) => {
    res.send('<h1>Gandu</h1>')
})

app.listen(3000)
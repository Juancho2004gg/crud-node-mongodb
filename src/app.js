const path=require('path')
const express=require('express')
const logger=require('morgan')
const bodyParser=require('body-parser')
const mongoose= require('mongoose');

const app=express();
//connection to mongodb
mongoose.connect('mongodb://localhost/crud-mongo',{useNewUrlParser:true,useUnifiedTopology:true}).then(
    db => console.log('db connected')
).catch(err => console.log(err))
//import routes
const indexRoutes=require('./routes/index.js');




//settings
app.set('port',process.env.PORT||3000)
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

//middlewares
app.use(logger('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
//routes
app.use('/',indexRoutes)

//start server
app.listen(app.get('port'),()=>{
console.log(`Server started in ${app.get('port')}`)
})
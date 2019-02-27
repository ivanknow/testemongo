const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Inventory = require("./api/model/inventory");

const productRoutes = require("./api/routes/products");
const orderRoutes = require("./api/routes/order");
//pegar variavel de ambiente proccess.env.NOME_DELA
mongoose.connect("mongodb://localhost:27017/inventory",{useNewUrlParser:true});
var db = mongoose.connection;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","*");
    if(req.method === 'OPTIONS'){
        res.header("Access-Control-Allow-Methods","PATCH,GET,DELETE,PUT,POST");
        return res.status(200).json({});
    }
    next();
});

app.use("/product",productRoutes);

app.use("/order",orderRoutes);
app.use("/inventory",(req,res,next)=>{
    
    let inv = new Inventory({_id:mongoose.Types.ObjectId(),item:"batata"});
    /*inv.save().then(result=>{console.log(result)})
    .catch(err=>{console.log(err)})*/

    Inventory.find({}).exec().then(doc => {
        res.status(200).json({
            message:"Success",
            "data":doc
        })
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            message:"ERROR",
            "data":err
        })
    });
    
});

app.use((req,res,next)=>{
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

app.use((error,req,res,next)=>{
    
    res.status(error.status || 500);
    res.json({
        error:{
            message:error.message
        }
    });
});

module.exports = app;
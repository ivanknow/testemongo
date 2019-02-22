const express = require("express");
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:"GET works"
    })
});

router.post('/',(req,res,next)=>{
    res.status(200).json({
        message:"POST works"
    })
});

router.get('/:orderId',(req,res,next)=>{
    const id = req.params.orderId;

    res.status(200).json({
        "id":id
    })
});

router.patch('/:orderId',(req,res,next)=>{
    const id = req.params.orderId;

    res.status(200).json({
        "id":id
    })
});

router.delete('/:orderId',(req,res,next)=>{
    const id = req.params.orderId;

    res.status(200).json({
        "id":id
    })
});
module.exports = router;
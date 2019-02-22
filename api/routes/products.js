const express = require("express");
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:"GET worksss"
    })
});

router.post('/',(req,res,next)=>{
    res.status(200).json({
        message:"POST works"
    })
});

router.get('/:productId',(req,res,next)=>{
    const id = req.params.productId;

    res.status(200).json({
        "ids":id
    })
});

router.patch('/:productId',(req,res,next)=>{
    const id = req.params.productId;

    res.status(200).json({
        "id":id
    })
});

router.delete('/:productId',(req,res,next)=>{
    const id = req.params.productId;

    res.status(200).json({
        "id":id
    })
});
module.exports = router;
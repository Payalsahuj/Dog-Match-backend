const express=require("express")
const { dogModel } = require("../model/dogdata.model")

const dogRouter=express.Router()




dogRouter.post("/adddata",async(req,res)=>{
const {image,time}=req.body
try{
    const data=new dogModel(req.body)
    await data.save()
    res.json({msg:"new data added",dog:req.body})
}catch(err){
    res.json({error:err.message})
}
})


module.exports={
    dogRouter
}
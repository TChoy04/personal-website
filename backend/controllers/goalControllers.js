const asyncHandler = require('express-async-handler');
const Goal = require("../models/goalModels.js")
const User = require("../models/userModel.js")
const getGoals = asyncHandler(async (req,res)=>{
    const goals = await Goal.find({user:req.user.id});

    res.status(200).json(goals);

})
const setGoals = asyncHandler(async (req,res)=>{
    if(!req.body.text){
        res.status(400);
        throw new Error("Please add a text field.");
    }
    const goal = await Goal.create({text:req.body.text, user:req.user.id});
    res.status(200).json(goal);
})

const updateGoals = asyncHandler(async (req,res)=>{
    const goal = await Goal.findById(req.params.id);
    if(!goal){
        res.status(400);
        throw new Error("Goal not found.");
    }
    if(!req.user){
        res.status(401)
        throw new Error("User not found.")
    }
    if(goal.user.toString()!==req.user.id){
        res.status(401)
        throw new Error("User not authorized.")
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.status(200).json(updatedGoal);

})
const deleteGoals = asyncHandler(async (req,res)=>{
    const goal = await Goal.findById(req.params.id);
    if(!goal){

        res.status(400);
        throw new Error("Goal not found.");
    }
    if(!req.user){
        res.status(401)
        throw new Error("User not found.")
    }
    if(goal.user.toString()!==req.user.id){
        res.status(401)
        throw new Error("User not authorized.")
    }
    const deletedGoal = await Goal.findByIdAndDelete(req.params.id,req.body);
    res.status(200).json(deletedGoal);

})
module.exports = {getGoals,setGoals,updateGoals,deleteGoals};
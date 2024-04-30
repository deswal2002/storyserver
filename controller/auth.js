const client=require("../modelss/user.js")
const bcrypt = require("bcrypt")
const jwt= require('jsonwebtoken')

const register=async (req,res)=>{
    try {
        const {userName,password}=req.body;
        if(!userName || !password){
            return res.status(400).json({
                errorMessage:"Bad request"
            })
        }
        const isExisted=await client.findOne({userName:userName})
        if(isExisted){
            return res.status(409)
            .json({ errorMessage: "User already exists" });
        }
        const newpassword=await bcrypt.hash(password,10)
        const newUser = new client({
            userName,
            password:newpassword,
        })
        await newUser.save()
        res.json({ message: "User registered successfully"})
    } catch (error) {
       console.log(error) 
    }
}

const login =async (req,res)=>{
    try {
       const {userName,password}=req.body 
       if(!userName || !password){
        return res.status(400).json({errorMessage:"bad request"})
       }
       const existed=await client.findOne({userName:userName})
       if(!existed){
        return res.json({errorMessage:"user does not exist"})
       } 
       const pass=await bcrypt.compare(password,existed.password)
       if(!pass){
        return res.json({errorMessage:"incorrect password"})
       }
       const token=jwt.sign({userId:existed._id},process.env.SECRET_KEY);
       res.cookie("token",token,{ httpOnly: true })
       res.json({token:token})
    } catch (error) {
       console.log(error) 
    }
}

module.exports= 
{register,login}
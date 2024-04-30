const mongoose=require('mongoose')

const userSchemma=new mongoose.Schema(
    {
        userName:{
            type: String,
            required: true,
        },
        password:{
            type: String,
            required: true,
        }
    },
    { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
)

module.exports= mongoose.model("client",userSchemma)
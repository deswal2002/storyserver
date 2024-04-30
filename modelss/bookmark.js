const mongoose = require('mongoose')

const bookmarkSchema =new mongoose.Schema(
    {
        userName:{
            type:String,
            required:true 
        },
        bookmark:{
            type:[String],
        },
        like:{
            type:[String],
        }
    }
)

module.exports= mongoose.model("bookmarkandlike",bookmarkSchema)
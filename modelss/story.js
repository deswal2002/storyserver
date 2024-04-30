const { default: mongoose } = require("mongoose");

const storySchema = new mongoose.Schema(
    {
        userName:{
            type : String,
            required : true
        },
        slides:{
            type :[ Number],
            required : true
        },
        heading:{
            type : [String],
            required : true 
        },
        description:{
            type : [String],
            required : true 
        },
        image:{
            type : [String],
            required : true 
        },
        category:{
            type : String,
            required : true
        },
        bookmark:{
            type : Boolean 
        },
        like:{
            type : Number
        }
    },
    { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
)

module.exports= mongoose.model("story",storySchema)
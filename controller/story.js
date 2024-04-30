const story=require('../modelss/story')
const { updateOne } = require('../modelss/user')

const postStory = async (req,res)=>{
    try {
        const {userName,slides,heading,description,image,category,bookmark,like}=req.body
        if(!userName ||
            !slides ||
            !heading ||
            !description ||
            !image ||
            !category 
        ){
            return res.status(400).json({
                errorMessage:"Bad request"
            })
        }
        const newStory = new story({
            userName,
            slides,
            heading,
            description,
            image,
            category,
            bookmark,
            like
        })
        await newStory.save()
        res.json({ message: "client story save successfully"})
    } catch (error) {
        console.log(error)
    }
}
const getStory = async (req,res)=>{
    try {
        const data=await story.find()
        res.json({"data":data})
    } catch (error) {
        console.log(error)
    }
}
const getStoryById= async (req,res)=>{
    try {
        const id=req.params.storyId 
        if(!id){
            return res.status(400).json({
                errorMessage:"Bad request"
            })
        }
        const data= await story.findById({_id:id})
        res.json({data:data})
    } catch (error) {
        console.log(error)
    }
}
const updateStory=async (req,res)=>{
    try {
        const id=req.params.storyId 
        if(!id){
            return res.status(400).json({
                errorMessage:"Bad request"
            })
        }
    const {userName,slides,heading,description,image,category,bookmark,like}=req.body
        if(!userName ||
            !slides ||
            !heading ||
            !description ||
            !image ||
            !category 
        ){
           return  res.status(400).json({
                errorMessage:"Bad request"
            })
        }
        await story.updateOne(
            { _id:id},
            {
                $set: {
                    userName,
                    slides,
                    heading,
                    description,
                    image,
                    category,
                    bookmark,
                    like
                }
            }
        )
        res.json({ message: "story details updated successfully" });
    } catch (error) {
        console.log(error)
    }
    
}

module.exports = {postStory,getStory,updateStory,getStoryById}
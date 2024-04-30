const express=require("express")
const router=express.Router()
const story = require('../controller/story')
const verifyToken = require("../middleware/authMiddleware.js")

router.post("/storyPost",verifyToken,story.postStory)
router.get("/storyGet",story.getStory)
router.get("/storyGetbyId/:storyId",story.getStoryById)
router.put("/updatestory/:storyId",verifyToken,story.updateStory)

module.exports=router
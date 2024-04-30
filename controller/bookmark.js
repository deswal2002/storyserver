const bookmarkandlike = require('../modelss/bookmark')

const postBookmark = async (req,res)=>{
    try {
        const {userName,bookmark,like} = req.body
        if(!userName){
            return res.status(400).json({
                errorMessage:"Bad request"
            })
        }
        const newBookmark=new bookmarkandlike({
            userName,
            bookmark,
            like
        })
        await newBookmark.save()
        res.json({ message: "client bookmark and likes are save successfully"})
    } catch (error) {
        console.log(error)
    }
}

const getBookmarkByUser = async (req,res)=>{
    try {
        const userName = req.params.userName
        
        if(!userName){
            return res.status(400).json({
                errorMessage:"Bad request"
            }) 
        }
        const bookmark = await bookmarkandlike.findOne({userName:userName})
        
        res.json({data:bookmark});
    } catch (error) {
      console.log(error)  
    }
}
const updatebookmark= async (req,res)=>{
    try {
        const userNames=req.params.userName
       
        if(!userNames){
            return res.status(400).json({
                errorMessage:"Bad request"
            }) 
        }
        const {userName,bookmark,like} = req.body
        if(!userName){
            return res.status(400).json({
                errorMessage:"Bad request"
            })
        }
        await bookmarkandlike.updateOne(
            {userName:userNames},
            {
                $set:{
                    userName,
                    bookmark,
                    like
                }
            }
        
        )
        
        res.json({ message: "bookmark and likes details are updated successfully" });
    } catch (error) {
        console.log(error)
    }
}

module.exports={postBookmark,getBookmarkByUser,updatebookmark}
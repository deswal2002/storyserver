const express= require('express')
const router = express.Router()
const bookmark = require('../controller/bookmark')
const verifyToken = require("../middleware/authMiddleware.js")

router.post("/postbookmark",bookmark.postBookmark)
router.get("/getBookmark/:userName",verifyToken,bookmark.getBookmarkByUser)
router.put("/updateBookmark/:userName",verifyToken,bookmark.updatebookmark)
module.exports = router
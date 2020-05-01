const express = require('express')
const router = express.Router()
const {isSignedIn,isAdmin,isAuthenticated} = require("../controllers/auth")
const {getUserById,getUser,getAllUsers,updateUser,userPurchaseList} = require("../controllers/user")

router.param("userId", getUserById)

router.get('/user/:userId', isSignedIn,isAuthenticated,getUser);
router.put('/user/:userId',isSignedIn,isAuthenticated, updateUser)
router.put('/orders/user/:userId',isSignedIn,isAuthenticated, userPurchaseList)


module.exports = router;
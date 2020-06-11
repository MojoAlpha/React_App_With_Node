const express = require('express')
const router = express.Router()


const {getCategoryById,createCategory,getAllCategory,getCategory,updateCategory, removeCategory} = require('../controllers/category')
const {isAdmin,isAuthenticated,isSignedIn} = require('../controllers/auth')
const {getUserById} = require('../controllers/user')

router.param("userId", getUserById)
router.param("categoryId", getCategoryById)

//actual routes
router.post('/category/create/:userId', isSignedIn, isAuthenticated, isAdmin ,createCategory);   //create route
//read routes
router.get('/category/:categoryId/',getCategory)
router.get('/categories',getAllCategory)
//update routes
router.put('/category/:categoryId/:userId',isSignedIn, isAuthenticated, isAdmin , updateCategory)
//delete routes
router.delete('/category/:categoryId/:userId',isSignedIn, isAuthenticated, isAdmin , removeCategory)


module.exports = router;
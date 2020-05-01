var express = require('express')
var router = express.Router()
const { check, validationResult } = require('express-validator');

const {signout, signup, signin ,isSignedIn} = require('../controllers/auth')

router.post('/signup',[
check("name","Name Should Be At least 3 Characters").isLength({min: 3}),
check("email","Email is required!!").isEmail(),
check("password","Password should be at least 8 characters").isLength({min: 8})
],signup)

router.post('/signin',[
    check("email","Email is required!!").isEmail(),
    check("password","Password field is required!!").isLength({min: 3})
    ],signin)

router.get('/signout', signout)

router.get('/testroute', isSignedIn , (req,res) =>{
    res.json(req.auth)
})

module.exports = router;
require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path')


const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')
const categoryRoutes = require('./routes/category')
const productRoutes = require('./routes/product')
const orderRoutes = require('./routes/order')
const stripeRoutes = require('./routes/stripePayment')

//Db Connection
mongoose.connect("mongodb+srv://Mojo:Mohit*4446@store-hlcas.mongodb.net/test?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true   //indexes the data when entered
}).then(() =>{     //If true
    console.log('Database Connected!!')
})

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//My Routes
app.use('/api',authRoutes);   //using routes defined in another file
app.use('/api',userRoutes);  //using routes defined for logged in user
app.use('/api',categoryRoutes); 
app.use('/api',productRoutes); 
app.use('/api',orderRoutes); 
app.use('/api',stripeRoutes); 

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname ,'./projfrontend/public/index.html'))
  })


//PORT
const port = process.env.PORT || 8000;

//Starting a Server
app.listen(port,() =>{
    console.log(`App is running at ${port}`)
})
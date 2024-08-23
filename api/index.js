const express = require("express");
const app = express();
const dotenv = require("dotenv");
const products = require("./data/Products")
dotenv.config();
const cors = require("cors");
const mongoose = require("mongoose");

//coneccion base de datos
mongoose.connect(process.env.MONGOOSEDB_URL).then(()=>console.log("db connected")).then((err)=>{
    err;
});

//CUEKbTTtte6Gz


const databaseSeeder = require('./databaseSeeder');
const userRoute = require("./routes/User");
const productRoute = require("./routes/Product");
const orderRoute = require("./routes/Order");

app.use(express.json())

app.use(cors());

//database seeder
app.use('/api/seed', databaseSeeder);

//routes for users
app.use('/api/users', userRoute);

//routes for products
app.use('/api/products', productRoute);

//routes for products
app.use('/api/orders', orderRoute);

// paypal payment
app.use("/api/config/paypal", (req,res)=>{
    res.send(process.env.PAYPAL_CLIENT_ID);
});

const PORT = process.env.PORT;
app.listen(PORT || 9000, ()=>{
    console.log('Server is listening on port', PORT);
});
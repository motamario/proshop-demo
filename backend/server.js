import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

//variable for a port
const port = process.env.PORT || 5000;

connectDB(); //Connect to MongoDB

//initialize express
const app = express();
//create first route, using an arrow 
//function (to make get request) that takes a request and a 
//response object. take response object and call send
//... sends some text "API running"
app.get('/', (req, res) => {
    res.send('API is running...');
});

//get request to api products (aka route for all products) & sending a json response with the products
app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

//route for a single product
//find goes through the products, and if the product id matchces the id in the url, then it returns that product.


//start the server up
app.listen(port, () => console.log(`Server running on port ${port} `))
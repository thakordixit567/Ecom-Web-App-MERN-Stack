import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";
import connectDB from "./config/db.js";

//configure dotenv
dotenv.config();

//connect DB config
connectDB();


// test object
const app = express();

//midelwares
app.use(express.json)
app.use(morgan('dev'))


// now create rest api
app.get('/', (req, res) => {
    res.send("<h1>welcome To Dix Shop</h1>")
} );

//now create PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
    console.log(`Server Running On ${PORT}`);
});
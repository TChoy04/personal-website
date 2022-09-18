const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();
const connectDB = require("./config/db.js")
const {errorHandler} = require("./middleware/errorHandler.js");
connectDB();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/api/goals',require("./routes/goalRoutes.js"));
app.use('/api/users',require("./routes/userRoutes.js"));
app.use(errorHandler);



app.listen(port,()=>console.log("Server started on port " + port));
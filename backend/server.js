const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();
const path = require("path")
const connectDB = require("./config/db.js")
const {errorHandler} = require("./middleware/errorHandler.js");
connectDB();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/api/goals',require("./routes/goalRoutes.js"));
app.use('/api/users',require("./routes/userRoutes.js"));
app.use(errorHandler);
app.use(express.static(path.join(__dirname,"../build")))
app.get('*',(req,res)=>res.sendFile(path.resolve(__dirname,"../",'build',"index.html")))



app.listen(port,()=>console.log("Server started on port " + port));
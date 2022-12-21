const express = require("express");
const app = express();
const cors = require("cors");
import mongoose from "mongoose";


app.use(cors());
app.use(express.json());

mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://userMachew115:QKHsomoMyKLS6kFr@cluster0.um0mqy0.mongodb.net/chefs-kiss")

app.use("/", require("./route/routes.ts"));

app.listen(5002, function(){
    console.log("express server is running on port 5002");
})
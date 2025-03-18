const express = require('express');
const { resolve } = require('path');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const userRoutes=require("./routes/userRoutes");

const app = express();
app.use(bodyParser.json());
const port = 3010;



app.use(express.static('static'));

mongoose.connect("mongodb+srv://ayishathnahdas69:Nahda@databaseca1.s55vu.mongodb.net/")
.then(()=>console.log("Mongodb connected"))
.catch(err=>console.error('error connecting',err));

app.use('/api/users',userRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

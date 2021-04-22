const express = require('express');
const path=require('path');
const app = express();
require('dotenv').config()
const port =process.env.PORT || 3200;

app.use(express.json());
app.use(express.urlencoded({ extended: false })); //must import 
app.use(express.static(path.join(__dirname,'public'))) 


 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
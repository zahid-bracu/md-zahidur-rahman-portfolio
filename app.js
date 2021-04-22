const express = require('express');
const path=require('path');
require('dotenv').config(); 
const app = express();
const port =process.env.PORT || 3200;



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'public'))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
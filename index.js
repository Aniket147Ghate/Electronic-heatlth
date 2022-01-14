const express = require('express');
const app=express();
const PORT = process.env.PORT || 8080;

const path = require('path');

app.listen(PORT,()=>{

  console.log('server is running on port 8080')


});

app.use(express.static(path.join(__dirname)));

//require express
const express = require('express');
//run express and save it in a variable
const app = express();
const path = require('path');
const mongoose = require('mongoose');


//tell app to use ejs
app.set('view engine', 'ejs');
//express assumed you are running the app from the same directory that contains views. So in order to work in different directories and run the code from anywhere, we need this code:
app.set('views', path.join(__dirname, '/views'));

//This runs every time we get a request. We use it as proof that a request came through.
app.use((req, res) => {
  //it will console.log in the node repl
  console.log('NEW REQUEST RECIEVED!')
  //this sends a response. It can be anything, objects, texts. Prints in browser?
  res.send('We got your req, this is the res')
})


//set up the server and give the app a port to listen on
app.listen(3000, () => {
  console.log('LISTENING ON PORT 3000');
})


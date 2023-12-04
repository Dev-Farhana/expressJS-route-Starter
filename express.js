const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send("Hello Express JS, this is simple respond handle ")
})

app.get('/home', (req, res) => {
  res.sendFile(  __dirname + '/index.html');
});

app.get('/about', (req, res) => {
  res.sendFile( __dirname +'/about.html');
});


// Start the server
app.listen(3000, () => {
  console.log('Server is running on localhost:3000');
});


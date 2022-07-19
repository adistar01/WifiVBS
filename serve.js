const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000
const wifi = require('wifi.js');

// Initialize wifi module
// Absolutely necessary even to set interface to null
wifi.init({
  iface: 'wifi' // network interface, choose a random wifi interface if set to null
  });

var eval;

 wifi.getCurrentConnections((error, currentConnections) => {
 if (error) {
   eval=error;
 } else {
   eval=currentConnections;
   
 }
 });


app.get('/', (req, res) => {
  res.send(eval);
  
})

app.post('/', (request, response) => {
  res.send('POST SUCCESS !');
});

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})
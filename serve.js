const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000
const wifi = require('wifi.js');



app.get('/', (req, res) => {
  res.send('Hello World!')
  // Initialize wifi module
// Absolutely necessary even to set interface to null
   wifi.init({
   iface: 'wifi' // network interface, choose a random wifi interface if set to null
   });

  wifi.getCurrentConnections((error, currentConnections) => {
  if (error) {
    res.send(error);
  } else {
    res.send(currentConnections);
    
  }
  });
})

app.post('/', (request, response) => {
  res.send('POST SUCCESS !');
});

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})
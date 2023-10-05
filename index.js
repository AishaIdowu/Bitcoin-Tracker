const express = require("express");
require('dotenv').config();
const bodyParser = require("body-parser");
const axios = require("axios");
const path = require ('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/", (req, res) => {
  var crypto = req.body.crypto;
  var fiat = req.body.fiat;
  var amount = req.body.amount;
  var baseURL = "https://apiv2.bitcoinaverage.com/convert/global";
 const apiKey = process.env.API_KEY
  
  axios
    .get(baseURL, {
        params: {
            from: crypto,
            to: fiat,
            amount: amount,
          }, 
      headers: {
        "X-ba-key": apiKey,
      },
    })
    .then((response) => {
      const price = response.data.price;
      var currentDate = response.data.time;
    //   console.log(response.data)
      res.write(`<p>The current date is ${currentDate}</p>`);
      
      res.write(`<h1>${amount}${crypto} is currently worth ${price}${fiat}</h1>`);

      res.send();
      
    })
    .catch((err) => {
      console.log("Error:", err.message);
    });
});

 
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server running on port:${PORT}`));

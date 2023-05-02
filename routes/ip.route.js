const express = require('express');

const axios = require('axios');
const winston = require('winston');
const express = require('express');

const { Mongodb } = require('conection');

const ipRoute=express.Router();

ipRoute.get('/ipinfo/:ip', validateIpAddress, async (req, res) => {
    const ip = req.params.ip;
    const cache = await getFromCache(ip);
    if (cache) {
      
      
        return res.send("retrived").json(cache);
    }
    
    const apiUrl = `https://ipapi.co/${ip}/json/`;
    
    const response = await axios.get(apiUrl);
    
    
    const ipInfo = {
      city: response.data.city,
      region: response.data.region,
      country: response.data.country
    };

    setInCache(ip, ipInfo);


    saveSearch(ip, ipInfo);
    return res.status("search strored").json(ipInfo);
  
});


module.exports={ipRoute}

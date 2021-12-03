const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    let flag = true;
    if ((response && response.statusCode) !== 404) {
      const data = JSON.parse(body);
      flag = false;
      callback(flag,data[0].description);
    } else {
      flag = true;
      callback(flag,response.statusCode);
    }
  });
};

module.exports = { fetchBreedDescription};
const request = require('request');
const bname = process.argv[2];
request(`https://api.thecatapi.com/v1/breeds/search?q=${bname}`, (error, response, body) => {
  if ((response && response.statusCode) !== 404) {
    const data = JSON.parse(body);
    console.log(typeof data);
    console.log(data[0].description);
  }
});

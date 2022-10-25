const axios = require("axios");
const label = require('./label')
const getVersion = (res,name) => {
    axios
      .get(`https://registry.npmjs.com/-/v1/search?text=${name}`)
      .then(function (response) {
        res.send(label(response.data.objects[0].package.version,name));
      })
      .catch(function (error) {
        console.log(error);
      })
  };
  module.exports = getVersion;
  
const axios = require("axios");
const label = (version) => {
  return `<div>${version}</div>`;
};

const getVersion = (res,name) => {
  let version = undefined;
  axios
    .get(`https://registry.npmjs.com/-/v1/search?text=${name}`)
    .then(function (response) {
      version = response.data.objects[0].package.version;
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      res.send(label(version));
    });
};
module.exports = getVersion;

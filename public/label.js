
const label = (version) => {
  return `<a href="https://www.npmjs.com/package/${version}"><div
  style="
     width: 180px;
     height: 50px;
     border: 1px solid #000000;
     border-radius: 8px;
   "><div
  style="
       float: left;
       border-radius: 8px 0px 0px 8px;
       background-color: #fff;
       width: 90px;
       height: 50px;
       position: relative;
       
     "><img src="/npm-logo-red.svg" style=" height: 20px;  position: absolute;
       top: 50%;
       left: 50%;
       -ms-transform: translate(-50%, -50%);
       transform: translate(-50%, -50%);""></span></div><div
  style="
       float: left;
       border-radius: 0px 8px 8px 0px;
       background-color: #d8413f;
       width: 90px;
       height: 50px;
       position: relative;
     "><span
  style="font-family: 'Trebuchet MS';
         font-style: normal;
         font-size: 20px;
         margin: 0;
         color: #fff;
         position: absolute;
         font-weight: bold;
         top: 50%;
         left: 50%;
         -ms-transform: translate(-50%, -50%);
         transform: translate(-50%, -50%);">${version}</span
     ></div></div></a>`;
};

module.exports = label;
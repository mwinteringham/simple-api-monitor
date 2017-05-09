var request = require("request");

(function loop() {
  setTimeout(function() {
    console.log("LOOP");
    loop();
  }, 1000);
}());

// 
// var options = { method: 'GET',
//   url: 'http://localhost:3001/ping'
// };
//
// request(options, function (error, response, body) {
//   if (error) throw new Error(error);
//
//   console.log(body);
//   console.log(response.statusCode);
//
//   loop();
// });

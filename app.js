var request = require("request");

(function loop() {
  setTimeout(function() {
    var options = { method: 'GET',
      url: 'http://localhost:3001/ping'
    };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);

      console.log(body);

      loop();
    });
  }, 1000);
}());

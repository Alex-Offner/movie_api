//loading modules from node.js to be able to access modules functions
const http = require("http"),
  url = require("url"),
  fs = require("fs");

//creating a server and listening to port 8080
http
  .createServer((request, response) => {
    let requestedURL = request.url,
      parsedURL = url.parse(requestedURL, true),
      filePath = "";

    //changes log.txt to document all requests to the server
    fs.appendFile(
      "log.txt",
      "URL: " + requestedURL + "\nTimestamp: " + new Date() + "\n\n",
      err => {
        if (err) {
          console.log(err);
        } else {
          console.log("Added to log.");
        }
      }
    );

    //creates a filePath according to URL name
    if (parsedURL.pathname.includes("documentation")) {
      filePath = __dirname + "/documentation.html";
    } else {
      filePath = "index.html";
    }

    //reads file according to filePath and writes the data of the file as HTML
    fs.readFile(filePath, (err, data) => {
      if (err) {
        throw err;
      }
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(data);
      response.end();
    });
  })
  .listen(8080);

console.log("My first Node test server is running on Port 8080.");

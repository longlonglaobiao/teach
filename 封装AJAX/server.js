const fs = require("fs");
const http = require("http");
const querystring = require("querystring");

http
  .createServer((req, res) => {
    let query = querystring.parse(req.url.split("?")[1]);
    let _url = req.url.split("?")[0];

    console.log("query:", query);
    console.log("_url:", _url);
    if (req.method == "GET") {
      if (_url == "/") {
        let rStream = fs.createReadStream("./demo.html");
        rStream.pipe(res);
      } else if (_url == "/aj") {
        // 当然这个 cb 参数需要前后端协同。
        if (!!query.cb) {
          res.end(`${query.cb}('hello world')`);
        } else {
          res.end("没有 jsonp");
        }
      }
    } else if (req.method == "POST") {
    }
  })
  .listen(3015);

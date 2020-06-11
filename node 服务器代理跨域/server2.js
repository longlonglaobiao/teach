const fs = require("fs");
const http = require("http");
http
  .createServer((req, res) => {
    // 测试代理跨域
    console.log(req.url);
    if (req.url === "/proxy") {
      res.end("来自 server 2 的数据");
    }
  })
  .listen(3011);

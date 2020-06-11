const fs = require("fs");
const http = require("http");

const options = {
  hostname: "localhost",
  port: 3011,
  path: "/proxy",
  method: "POST",
};

http
  .createServer((req, res) => {
    if (req.url == "/") {
      let rStream = fs.createReadStream("./client.html");
      rStream.pipe(res);
    }
    // 测试代理跨域
    if (req.url === "/proxy") {
      let str = "";
      // 请求另外一个服务器的数据
      let re = http.request(options, (res1) => {
        res1.on("data", (chunk) => {
          str += chunk;
        });
        res1.on("end", () => {
          res.end(str);
        });
      });
      re.end();
    }
  })
  .listen(3010);

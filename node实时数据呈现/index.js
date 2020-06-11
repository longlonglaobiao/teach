const http = require("http");
const url = require("url");
const fs = require("fs");
const mime = require("./mime.json");
const path = require("path");
const { getData } = require("./spider");

const server = http.createServer((req, res) => {
  res.setHeader("content-type", "text/html;charset=utf-8");

  let urlObj = url.parse(req.url);
  console.log(urlObj);

  if (urlObj.pathname === "/" || urlObj.pathname === "/index") {
    // 文件读取方式；
    // let indexData = fs.readFileSync("./views/index.html")
    // res.end(indexData);

    // 流方式；
    let rHtmlStream = fs.createReadStream("./views/index.html");
    rHtmlStream.pipe(res);
  } else if (urlObj.pathname === "/detail") {
    let rHtmlStream = fs.createReadStream("./views/detail.html");
    rHtmlStream.pipe(res);
  } else if (urlObj.pathname === "/api/data") {
    // 通过爬虫读取动态数据
    getData().then((data) => {
      console.log(data);
      return res.end(JSON.stringify(data));
    });
    // 可以读取文件数据
    // let dataStream = fs.createReadStream("./data.json");
    // dataStream.pipe(res);
  } else {
    if (urlObj.pathname !== "/favicon.ico") {
      // 获取资源扩展名；
      let ext = path.extname(urlObj.pathname);

      // 根据请求资源的扩展名选择相应的 mime
      res.setHeader("Content-Type", mime[ext]);
      let rData = fs.createReadStream("./views" + urlObj.pathname);

      // 将请求的资源传输给返回对象
      rData.pipe(res);
    }
  }
});
server.listen(3000);
console.log("this server is listening on port 3000");

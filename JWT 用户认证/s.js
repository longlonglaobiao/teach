const http = require("http");
const fs = require("fs");
const jwt = require("jsonwebtoken");

let secret = "mytoken";

// 获取 post 数据
function getPostData(req) {
  return new Promise((resolve, reject) => {
    let resStr = "";
    req.on("data", (chunk) => {
      resStr += chunk;
    });
    req.on("end", () => {
      resolve(resStr);
    });
  });
}

http
  .createServer((req, res) => {
    if (req.method === "GET") {
      if (req.url == "/login") {
        // 显示界面
        let rStream = fs.createReadStream("login.html");
        rStream.pipe(res);
      } else if (req.url === "/detail") {
        // 显示界面
        let rStream = fs.createReadStream("detail.html");
        rStream.pipe(res);
      } else if (req.url === "/getdetail") {
        let _token = req.headers.authorization;
        jwt.verify(_token, secret, (error, decoded) => {
          if (error) {
            console.log(error.message);
            throw error;
          }
          res.end(JSON.stringify(decoded));
        });
      }
    } else if (req.method === "POST") {
      if (req.url === "/checkLogin") {
        getPostData(req).then((data) => {
          // 获取用户信息
          let userInfo = JSON.parse(data);

          // 当然这里的用户名密码验证是需要跟 数据库结合的
          if (userInfo.username === "张三" && userInfo.pwd === "12345") {
            // 只要用户名密码正确，登录成功，此时设置 jwt
            let token = jwt.sign(
              {
                // 预定义选项和自定义选项都属于可选项
                name: "龙龙老表",
                level: "草鸡管理员",
                iat: Math.floor(Date.now() / 1000), // 签发时间，秒
                exp: Math.floor(Date.now() / 1000) + 30, // 30 秒之后过期
              },
              secret
            );
            res.end(
              JSON.stringify({
                status: 1,
                token: token,
              })
            );
          } else {
            res.end(
              JSON.stringify({
                status: 0,
              })
            );
          }
        });
      }
    }
  })
  .listen(8500);
console.log("this server is listening on port 8500");

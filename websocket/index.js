const ws = require("ws").Server;
const wss = new ws({ port: 3003 });
wss.on("connection", function (ws) {
  console.log("client connected");
  ws.on("message", function (message) {
    // 接收实时数据
    console.log(message);
  });
  ``;
  //setInterval(() => {
  let data = {
    name: "张三",
    age: 20,
  };
  ws.send(JSON.stringify(data));
  //}, 1000);
});

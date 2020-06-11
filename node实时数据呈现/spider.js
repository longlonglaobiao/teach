const http = require("http");
const cheerio = require("cheerio");

function getData() {
  return new Promise((resolve, reject) => {
    http.get("http://news.ifeng.com/", (res) => {
      let sHtml = "";
      res.on("data", (chunk) => {
        sHtml += chunk;
      });
      res.on("end", () => {
        resolve(handleHtml(sHtml));
      });
    });
  });
}

function handleHtml(html) {
  let $ = cheerio.load(html);
  let arr = [];
  $(".news-stream-basic-news-list li").each((k, v) => {
    let obj = {
      title: $(v).find("a").text(),
      imgUrl: "http:" + $(v).find("img").attr("src"),
    };
    arr.push(obj);
  });
  return arr;
}

module.exports = {
  getData,
};

export default class Food {
  constructor(cols, rows) {
    this.cols = cols; // 行数
    this.rows = rows; // 列数
    this.data = null; // 因为食物的数据一定是单个的
    this.create();
  }

  // 随机位置创建一个食物
  create() {
    let [x, y] = [null, null];
    // 运用的是我们自己封装的 jQ 框架
    if ($.randomInt) {
      y = $.randomInt(0, this.cols);
      x = $.randomInt(0, this.rows);
    } else {
      // 运用的是原始的  JQ 框架
      y = Math.round(Math.random() * (this.cols - 0)) + 0;
      x = Math.round(Math.random() * (this.rows - 0)) + 0;
    }
    this.data = { x, y, type: "food" };
  }
}

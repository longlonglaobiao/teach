export default class Map {
  // el 是地图的挂载元素
  // rect 是每一个小方格的尺寸
  constructor(el, rect) {
    this.el = el;
    this.rect = rect;
    // 这里面存放地图上面已有的数据节点
    this.data = [];
    // 地图行数
    this.cols = parseInt(this.el.css("height")) / rect;
    // 地图列数
    this.rows = parseInt(this.el.css("width")) / rect;

    this.render();
  }
  // 判断地图上面这个位置是否已有节点（主要是蛇身和食物，位置解构）
  hasNode({ x, y }) {
    return this.data.some((node) => {
      return node.x == x && node.y == y;
    });
  }
  // 渲染函数
  render() {
    let res = this.data
      .map((item) => {
        return `<div class="rect" biao-type="${item.type}" style="left:${
          item.x * this.rect
        };top:${item.y * this.rect};width:${this.rect}px;height:${
          this.rect
        }px"></div>`;
      })
      .join("");

    this.el.html(res);
  }
  // 添加节点（这里有可能不止一个节点，比如初始化时候，舍身不止有蛇头）
  addNode(nodes) {
    this.data = this.data.concat(nodes);
  }
  // 清除数据
  clear() {
    this.data.length = 0;
  }
}

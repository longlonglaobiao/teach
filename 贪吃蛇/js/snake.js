export default class Snake {
  constructor() {
    // 数据里面包含了一节蛇头和3节蛇身
    this.data = [
      {
        x: 10,
        y: 10,
      },
      {
        x: 9,
        y: 10,
        type: "snake",
      },
      {
        x: 8,
        y: 10,
        type: "snake",
      },
      {
        x: 7,
        y: 10,
        type: "snake",
      },
    ];
    this.lastNode = null;

    // 默认向右移动
    this.direction = "right";
  }

  // 改变移动方向
  dir(direction) {
    if (direction == "left") {
      if (this.direction == "right") {
        return false;
      }
    }
    if (direction == "right") {
      if (this.direction == "left") {
        return false;
      }
    }
    if (direction == "top") {
      if (this.direction == "bottom") {
        return false;
      }
    }
    if (direction == "bottom") {
      if (this.direction == "top") {
        return false;
      }
    }

    this.direction = direction;
    return true;
  }

  // 移动
  move() {
    // 获取最后一个节点的下标
    let i = this.data.length - 1;

    this.lastNode = {
      x: this.data[i].x,
      y: this.data[i].y,
      type: "snake",
    };

    // 移动（后面的节点去替换前面的节点）
    for (let j = i; j > 0; j--) {
      this.data[j].x = this.data[j - 1].x;
      this.data[j].y = this.data[j - 1].y;
    }
    // 根据方向移动蛇头
    switch (this.direction) {
      case "left":
        this.data[0].x--;
        break;
      case "right":
        this.data[0].x++;
        break;
      case "top":
        this.data[0].y--;
        break;
      case "bottom":
        this.data[0].y++;
        break;
    }
  }
  // 吃食物
  eat() {
    this.data.push(this.lastNode);
  }
}

import Map from "./map.js";
import Food from "./food.js";
import Snake from "./snake.js";

export default class Game {
  constructor(el, rect) {
    // Map 类
    this.map = new Map(el, rect);
    // 食物类
    this.food = new Food(this.map.cols, this.map.rows);
    // 蛇类
    this.snake = new Snake();

    this.keydown();
    this.move();
    this.render();
  }

  // 随机位置创建食物
  createFood() {
    this.food.create();

    if (this.map.hasNode(this.food.data)) {
      this.createFood();
    }
    this.map.addNode(this.food.data);
  }
  // 动起来
  move() {
    let timer = setInterval(() => {
      if (this.isOver()) {
        alert("游戏结束");
        clearInterval(timer);
        return;
      }
      this.snake.move();
      if (this.isFood()) {
        this.snake.eat();
        this.food.create();
      }
      this.render();
    }, 200);
  }

  // 判断游戏是否结束
  isOver() {
    // 撞墙
    if (
      this.snake.data[0].x < 0 ||
      this.snake.data[0].x > this.map.rows - 1 ||
      this.snake.data[0].y < 0 ||
      this.snake.data[0].y > this.map.cols - 1
    ) {
      return true;
    }

    // 撞自己
    for (let i = 1; i < this.snake.data.length; i++) {
      if (
        this.snake.data[0].x === this.snake.data[i].x &&
        this.snake.data[0].y === this.snake.data[i].y
      ) {
        return true;
      }
    }
    return false;
  }

  // 绘制数据
  render() {
    this.map.clear();
    this.map.addNode(this.snake.data);
    this.map.addNode(this.food.data);
    this.map.render();
  }
  // 判断是否吃到食物
  isFood() {
    return (
      this.snake.data[0].x === this.food.data.x &&
      this.snake.data[0].y === this.food.data.y
    );
  }
  // 键盘按下事件
  keydown() {
    // 注意这里是箭头函数
    document.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "ArrowUp":
          this.snake.dir("top");
          break;
        case "ArrowDown":
          this.snake.dir("bottom");
          break;
        case "ArrowLeft":
          this.snake.dir("left");
          break;
        case "ArrowRight":
          this.snake.dir("right");
          break;
      }
    });
  }
}

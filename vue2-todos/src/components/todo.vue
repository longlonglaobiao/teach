<template>
  <div class="todo">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-input
          autofocus="autofocus"
          placeholder="press  enter  to  end"
          v-model="input"
          clearable
          @keyup.enter.native="addTodo"
        ></el-input>
      </div>
      <tabs @tab="tabChange"></tabs>
      <Item
        v-for="todo in filterTodos"
        :todo="todo"
        :key="todo.id"
        @del="delItem"
        @change="changeTodo"
      ></Item>
      <Footer :lenObj="lenObj" @clear="clear"></Footer>
    </el-card>
  </div>
</template>
<script>
import Item from "./item.vue";
import tabs from "./tabs.vue";
import Footer from "./footer.vue";
let id = 0;
export default {
  data() {
    return {
      input: "",
      todos: [],
      filter: "all"
    };
  },
  components: {
    Item,
    tabs,
    Footer
  },
  computed: {
    filterTodos() {
      if (this.filter === "all") {
        return this.todos;
      } else if (this.filter === "active") {
        return this.todos.filter(tab => !tab.completed);
      } else {
        return this.todos.filter(tab => tab.completed);
      }
    },
    lenObj() {
      return {
        all: this.todos.length,
        completed: this.todos.filter(tab => tab.completed).length
      };
    }
  },
  methods: {
    addTodo() {
      let title = this.input.trim();
      if (!!title) {
        this.todos.unshift({
          id: id++,
          title: title,
          completed: false
        });
      }
      this.input = "";
    },
    delItem(id) {
      this.todos.splice(
        this.todos.findIndex(todo => todo.id === id),
        1
      );
    },
    tabChange(tab) {
      this.filter = tab;
    },
    changeTodo(id) {
      let idx = this.todos.findIndex(todo => todo.id === id);
      this.todos[idx].completed = !this.todos[idx].completed;
    },
    clear() {
      this.todos = this.todos.filter(todo => !todo.completed);
    }
  }
};
</script>

<style>
.todo {
  display: flex;
  justify-content: center;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>

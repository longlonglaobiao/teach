<template>
  <div id="app">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <Todo></Todo>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import Header from "./components/header.vue";
import Todo from "./components/todo.vue";
export default {
  components: {
    Header,
    Todo,
  },
};
</script>

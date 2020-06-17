<template>
  <div>
    <el-row :gutter="20" style="margin-bottom: 20px;">
      <el-col :span="20"
        ><div
          :class="['grid-content', 'bg-purple', checked ? 'completed' : '']"
        >
          <el-checkbox v-model="checked" @change="changeTodo">
            {{ todo.title }}
          </el-checkbox>
        </div></el-col
      >
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <el-button
            type="danger"
            style="float: right;"
            size="mini"
            icon="el-icon-delete"
            circle
            @click="delItem"
          ></el-button></div
      ></el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: this.todo.completed,
    };
  },
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    delItem() {
      this.$emit("del", this.todo.id);
    },
    changeTodo() {
      this.$emit("change", this.todo.id);
    },
  },
};
</script>
<style>
.completed .el-checkbox__label {
  opacity: 0.5;
  text-decoration: line-through;
}
.el-row .el-button {
  visibility: hidden;
}
.el-row:hover {
  cursor: pointer;
}
.el-row:hover .el-button {
  visibility: visible;
}
</style>

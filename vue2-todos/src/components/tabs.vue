<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="all" name="all"></el-tab-pane>
      <el-tab-pane label="active" name="active"></el-tab-pane>
      <el-tab-pane label="completed" name="completed"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "second",
    };
  },
  methods: {
    handleClick(tab, event) {
      this.$emit("tab", tab.label);
    },
  },
};
</script>

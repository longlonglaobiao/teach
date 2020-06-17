<template>
  <div class="footer">
    <span>{{ lenObj.completed }}/{{ lenObj.all }}</span>
    <span @click="clear">clear all completed</span>
  </div>
</template>
<script>
export default {
  props: {
    lenObj: {
      type: Object,
      required: true,
    },
  },
  methods: {
    clear() {
      this.$emit("clear");
    },
  },
};
</script>
<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
}
.footer span {
  display: inline-block;
  font-size: 16px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  padding: 2px;
}
.footer span:hover {
  cursor: pointer;
  box-shadow: 0 0 5px 0 rgba(255, 0, 0, 0.3);
}
</style>

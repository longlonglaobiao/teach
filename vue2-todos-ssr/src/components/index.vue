<template>
  <div class="content">
    <Row type="flex" justify="center" class="code-row-bg">
      <i-col span="8">
        <mInput></mInput>
      </i-col>
    </Row>
  </div>
</template>
<script>
import mInput from "./input.vue";
export default {
  data() {
    return {
      value: "00"
    };
  },
  component: {
    mInput
  },
  methods: {
    addTitle() {
      console.log(this.value);
    }
  }
};
</script>
<style scoped>
.content {
  border: 1px solid blue;
}
h2 {
  text-align: center;
}
</style>
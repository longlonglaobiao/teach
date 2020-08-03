<template>
  <div>
    <i-input
      @keyup.enter.native="addTitle()"
      v-model="value"
      placeholder="请输入..."
      style="width: 300px"
    ></i-input>
  </div>
</template>

<script>
export  {
  name: "mInput",
  data() {
    return {
      value: ""
    };
  },
  methods: {
    addTitle() {
      this.$emit("addTitle", this.value);
    }
  }
};
</script>
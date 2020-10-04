<template>
    <div class="example axios">
      <h2 class="example_title">Axios Test</h2>
      <app-button size="lg" @click="getData">Get Data</app-button>
    </div>
</template>
<script>
export default {
  data() {
    return {
      usersInfo: [],
    };
  },
  methods: {
    getData() {
      // 伪造的请求，只是为单元测试提供一个例子
      // 下面的两处return都是为了配合单元测试,方便单元测试
      // 如果没有下面的return.在测试时就无法获取promis和最终请求结果,导致无法进行断言
      return this.$axios
        .get('users/')
        .then((res) => {
          this.usersInfo = res.data;
          return res;
        })
        .catch((e) => e);
    },
  },
};
</script>
<style scoped>
</style>

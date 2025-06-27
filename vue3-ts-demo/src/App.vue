<template>
  <div id="app">
    <h1>Vue3 TypeScript Demo</h1>
    <van-button type="primary">Vant Button</van-button>
    <p>Lodash Example: {{ chunkedArray }}</p>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';

  const chunkedArray = ref<string[]>([]);

  onMounted(() => {
    // 测试lodash功能
    chunkedArray.value = _.chunk(['a', 'b', 'c', 'd'], 2);
  });
</script>

<style scoped>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
</style>

<template>
  <div :class="['tree-test']"> </div>
</template>

<script lang="ts" setup name="tree-test">
  const props = withDefaults(defineProps<{}>(), {});
</script>

<style lang="less" scoped>
  .tree-test {
  }
</style>

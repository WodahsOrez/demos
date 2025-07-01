<template>
  <PureTree :class="['ebr-tree']">
    <template #node="{ node }">
      <NodeTitle :title="node.name" :tooltip="node.name" />
    </template>
  </PureTree>
</template>

<script lang="ts" setup name="ebr-tree">
  import { NodeTitle, PureTree } from '../pure-tree';

  NodeTitle;

  PureTree;

  const emit = defineEmits<{
    (e: 'update:value', value: string | undefined): void;
  }>();
</script>

<style lang="less" scoped>
  .ebr-tree {
  }
</style>

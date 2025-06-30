<template>
  <div :class="['pure-tree-test']">
    <PureTree :nodes="treeData" />
  </div>
</template>

<script lang="ts" setup name="pure-tree-test">
  import PureTree from '@/components/pure-tree/pure-tree';

  const treeData = [
    {
      id: 1,
      name: '1',
      children: [
        {
          id: 2,
          name: '2',
          children: [
            {
              id: 3,
              name: '3',
            },
          ],
        },
      ],
    },
  ];
</script>

<style lang="less" scoped>
  .pure-tree-test {
  }
</style>

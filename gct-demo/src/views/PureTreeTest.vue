<template>
  <div :class="['pure-tree-test']">
    <PureTree :nodes="treeData" @node-click="nodeClick" @node-arrow-click="nodeArrowClick" />
  </div>
</template>

<script lang="ts" setup name="pure-tree-test">
  import PureTree from '@/components/pure-tree/pure-tree';
  import { reactive } from 'vue';

  const treeData = reactive([
    {
      id: 1,
      name: '1打死的时间是对哦多少粉丝',
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
  ]);

  const nodeClick = (node: any) => {
    console.log(node);
    node.selected = !node.selected;
  };

  const nodeArrowClick = (node: any) => {
    console.log(node);
    node.expanded = !node.expanded;
  };
</script>

<style lang="less" scoped>
  .pure-tree-test {
    width: 150px;
    background-color: #fff;
  }
</style>

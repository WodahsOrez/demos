<template>
  <div :class="['tree-test']">
    <div class="bg-dark-50">
      <TreeSelect v-model:selectedIds="selectedIds" :controller="controller" />
    </div>
  </div>
</template>

<script lang="ts" setup name="tree-test">
  import { SelectTreeNode, TreeSelect, TreeSelectController } from '@/components/tree-select';
  import { ref } from 'vue';

  const selectedIds = ref<string[]>([]);

  class MultipleController extends TreeSelectController {
    allNodes: SelectTreeNode[] = [
      {
        id: '1',
        name: '1',
        children: [
          {
            id: '1-1',
            name: '1-1',
          },
        ],
      },
    ];
    override async fetch(opts: {
      query?: string;
      pageSize: number;
      pageNo: number;
    }): Promise<{ totalPage: number; nodes: SelectTreeNode[] }> {
      console.log('请求数据', opts);
      return {
        totalPage: 1,
        nodes: this.allNodes,
      };
    }

    override async getNodesByIds(ids: string[]): Promise<SelectTreeNode[]> {
      const arr = this.allNodes.filter((i) => ids.includes(i.id));
      return arr;
    }
  }

  const controller = new MultipleController();
</script>

<style lang="less" scoped>
  .tree-test {
  }
</style>

import { PropType, SlotsType, defineComponent, renderSlot } from 'vue';
import './pure-tree.less';
import { Icon } from 'vant';
import { PureTreeNode } from './types';

export const PureTree = defineComponent({
  name: 'PureTree',
  props: {
    nodes: {
      type: Array as PropType<PureTreeNode[]>,
      default: () => [],
    },
  },
  emits: {
    nodeCheckChange: (_checked: boolean, _node: PureTreeNode) => true,
    nodeExpandChange: (_expanded: boolean, _node: PureTreeNode) => true,
  },
  slots: Object as SlotsType<{
    nodeLabel: { node: PureTreeNode };
    nodeArrow: { node: PureTreeNode };
  }>,
  setup(props, { emit, slots }) {
    const onNodeChecked = (node: PureTreeNode, e: MouseEvent) => {
      e.stopPropagation();
      /** 是否选中 */
      const checked = !!node.selected;
      emit('nodeCheckChange', checked, node);
    };

    const onNodeExpanded = (node: PureTreeNode, e: MouseEvent) => {
      e.stopPropagation();
      const expanded = !!node.expanded;
      emit('nodeExpandChange', expanded, node);
    };

    const renderArrow = (node: PureTreeNode) => {
      const isExpand = !!node.expanded;
      const arrow = renderSlot(slots, 'node-arrow', { node }, () => {
        return [<Icon name={isExpand ? 'arrow-up' : 'arrow-down'} />];
      });
      return (
        <div class="pure-tree__expand-arrow" onClick={(e) => onNodeExpanded(node, e)}>
          {arrow}
        </div>
      );
    };

    const renderNode = (node: PureTreeNode) => {
      const label = renderSlot(slots, 'node-label', { node }, () => [node.name]);
      return <div class="pure-tree__node">{label}</div>;
    };

    const renderNodeWrapper = (node: PureTreeNode, level: number = 0) => {
      /** 是否是父节点 */
      const isParent = node.children && node.children.length > 0;
      const classNames = {
        'pure-tree__node-wrapper': true,
        'pure-tree__node-wrapper--parent': isParent,
        'pure-tree__node-wrapper--expanded': isParent && node.expanded,
        'pure-tree__node-wrapper--selected': node.selected,
      };

      return (
        <div class={classNames}>
          <div class="pure-tree__node-wrapper-content" onClick={(e) => onNodeChecked(node, e)}>
            {isParent && renderArrow(node)}
            {renderNode(node)}
          </div>
          {node.children && node.children.length > 0 && (
            <div class="pure-tree__node-wrapper-children">
              {node.children.map((child) => renderNodeWrapper(child, level + 1))}
            </div>
          )}
        </div>
      );
    };

    return { renderNodeWrapper };
  },
  render() {
    return (
      <div class={['pure-tree']}>{this.nodes.map((node) => this.renderNodeWrapper(node))}</div>
    );
  },
});

export default PureTree;

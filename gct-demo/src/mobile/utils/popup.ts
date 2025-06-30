import type { DefineComponent, VNodeNormalizedChildren } from 'vue';
import { createApp, createVNode, render } from 'vue';

/**
 * 创建一个新的app并绘制到其中
 * @export
 * @param vnode
 * @param container
 * @return {*}
 */
export function renderToNewApp(vnode: any, container: any) {
  const app = createApp(vnode);
  app.mount(container);
  document.body.appendChild(container);
  return () => {
    setTimeout(() => {
      console.log('app unmount');
      if (!container) return;
      render(null, container);
      container.remove();
      app?.unmount();
    }, 100);
  };
}

export interface Payload {
  popupProps?: any; // 组件属性
  context?: any; // 上下文
  [key: string]: any;
}

export class GctPopup {
  static open<P>(
    component: DefineComponent<P>,
    payload: (P | ({} extends P ? null : never)) & Payload = {},
    children?: VNodeNormalizedChildren,
  ) {
    const container: any = document.createElement('div');
    const id = 'gct-dialog-' + Date.now() + '-' + Math.random().toString(36).substring(2, 10);
    container.id = id;
    let destroyFn: Function = () => {};
    const props = {
      ...payload,
      popupProps: {
        _after_close_: () => {
          console.log('beforeClose');
          destroyFn();
          return true;
        },
        position: 'right',
        ...payload.popupProps,
      },
    };
    const instance = createVNode(component, props as any, children);
    destroyFn = renderToNewApp(instance, container);
  }
}

import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  server: {
    host: true,
    port: 8010,
  },
  build: {
    outDir: 'docs',
  },
  plugins: [
    vue(),
    vueJsx(),
    Components({
      resolvers: [VantResolver()],
    }),
    UnoCSS({ hmrTopLevelAwait: false }),
  ],
  resolve: {
    alias: {
      '@': '/src',
      '@mobile': '/src/mobile',
    },
  },
});

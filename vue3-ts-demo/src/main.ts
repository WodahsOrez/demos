// main.ts
import _ from 'lodash-es';
import { createApp } from 'vue';

import App from './App.vue';

const app = createApp(App);
app.config.globalProperties._ = _;
app.mount('#app');

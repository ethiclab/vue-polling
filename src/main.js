import Vue from 'vue';
import VSocket from 'vue-socket.io';
import '@progress/kendo-ui';
import '@progress/kendo-theme-default/dist/';

import {
  ChartInstaller,
} from '@progress/kendo-charts-vue-wrapper';
import App from './App.vue';

Vue.use(
  new VSocket({
    debug: true,
    connection: 'http://localhost:4000',
  })
);

Vue.use(ChartInstaller);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

import './registerServiceWorker';

import App from '@/App.vue';

import router from '@/routes';
import store from '@/store';

import Vue from 'vue';
import vuetify from '@/plugins/vuetify';

Vue.config.devtools = true;
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store,
  vuetify,
}).$mount('#app');

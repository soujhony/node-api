import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";

import store from './store/store';

import axios from 'axios';
import { onSuccess, onError, beforeRequestSuccess, beforeRequestError } from './interceptors/Jwt';

axios.interceptors.request.use(beforeRequestSuccess, beforeRequestError);
axios.interceptors.response.use(onSuccess, onError);

Vue.config.productionTip = false;

Vue.use(Argon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

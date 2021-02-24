/*!

 =========================================================
 * Vue Light Bootstrap Dashboard - v2.0.0 (Bootstrap 4)
 =========================================================

 * Product Page: http://www.creative-tim.com/product/light-bootstrap-dashboard
 * Copyright 2019 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

// LightBootstrap plugin
import LightBootstrap from './light-bootstrap-main'
// Bootstrap Vue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// router setup
import routes from './routes/routes'

import './registerServiceWorker'

import googleConfig from './google_api_config'
Vue.prototype.$googleConfig = googleConfig
import { LoaderPlugin } from 'vue-google-login';

// plugin setup
Vue.use(VueRouter)
Vue.use(LightBootstrap)
// 安裝 BootstrapVue
Vue.use(BootstrapVue);
// 安裝 BootstrapVue icon components plugin (可選)
Vue.use(IconsPlugin);

Vue.use(LoaderPlugin, googleConfig);

// configure router
const router = new VueRouter({
//   mode: 'history', // 去掉#
  routes, // short for routes: routes
  linkActiveClass: 'nav-item active',
  scrollBehavior: (to) => {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return { x: 0, y: 0 }
    }
  }
})

router.beforeEach((to, from, next) =>
{
    if (to.meta.requireAuth) {
      if (typeof localStorage.token !== 'undefined') {
        console.log("has token");
        next();
      } else {
        console.log("miss token");
        next('/login');
      }
    }
    else {
      next();
    }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
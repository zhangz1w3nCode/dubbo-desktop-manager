import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/style/global.css";
import "./assets/iconfont.css";


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import splitPane from 'vue-splitpane'

if(process.platform === 'win32'){
  import("./assets/style/windows.css")
}

import moment from 'moment'
Vue.prototype.$moment = moment
moment.locale('zh-cn')  //设置区域为中国

Vue.use(ElementUI);
Vue.component('split-pane', splitPane);

Vue.config.productionTip = false

import jsonlint from 'jsonlint' //引入
window.jsonlint = jsonlint  //全局化

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

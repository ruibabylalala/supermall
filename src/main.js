import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

// 最终执行结果：aaa -> ccc -> bbb
// console.log('aaa');

// setTimeout(() => {
//   console.log('bbb');
// });

// console.log('ccc');
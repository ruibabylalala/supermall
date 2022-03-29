import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

// 最终执行结果：aaa -> ccc -> bbb
// console.log('aaa');

// setTimeout(() => {
//   console.log('bbb');
// });

// console.log('ccc');
// 引入vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
import { hunhe, hunhe2 } from './mixin'

// 关闭vue的生产提示
Vue.config.productionTip = false
Vue.mixin(hunhe)
Vue.mixin(hunhe2)

new Vue({
  render: h => h(App)
}).$mount('#app')

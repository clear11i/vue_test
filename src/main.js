// 引入vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入插件
import plugins from './plugins'

// 关闭vue的生产提示
Vue.config.productionTip = false

// 应用（使用）插件
Vue.use(plugins, 1, 2, 3)

new Vue({
  render: h => h(App)
}).$mount('#app')

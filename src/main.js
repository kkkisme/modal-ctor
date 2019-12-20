import Vue from 'vue'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css'

import E from 'element-ui'
Vue.use(E)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
// import mixinFilters from '@/mixins/filters.js'
import Todo from '@/components/Todo.vue'
import '@/assets/style/app.css'

// Vue.mixin(mixinFilters)
Vue.component('Todo', Todo)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

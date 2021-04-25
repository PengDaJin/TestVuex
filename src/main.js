import Vue from 'vue'
import store from './store'
import TodoList from './TodoList'
import Test from './Test'
// import { use } from '_vue@2.6.12@vue/types/umd'

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { TodoList, Test },
  template: '<TodoList />'
})

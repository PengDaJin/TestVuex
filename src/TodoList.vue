<template>
  <div>
    <input v-model='inputVlaue' />
    <button @click='handleSubmit'>dianjiax</button>
    <ul>
      <todo-item
        v-for="(item, index) of list"
        :key="index"
        :content="item"
        :index="index"
        @delete='handleDelete'
      ></todo-item>
    </ul>
    <br/><br/><br/>

      <h1>{{$store.state.count}}</h1>
      <button @click='increment'>+1</button>
      <button @click='decrement'>-1</button>
      <h1>{{$store.state.info}}</h1>
      <button @click='updateInfos'>ADD</button>
      <button @click='updateInfoX'>Promise</button>
      <br/><br/><br/>
      <h1>{{$store.state.a.name}}</h1>
  </div>
</template>

<script>
import TodoItem from './components/TOdoItem'
import {DECREMENT} from './store/mutations-types'
export default {
  components: {
    'todo-item': TodoItem
  },
  data () {
    return {
      inputVlaue: ' ',
      list: []
    }
  },
  methods: {
    // vue 原始方法
    handleSubmit () {
      this.list.push(this.inputVlaue)
      this.inputVlaue = ''
    },
    handleDelete (index) {
      this.list.splice(index, 1)
    },
    // vuex共享方法
    increment () {
      this.$store.commit('increment') // 普通风格
    },
    decrement () {
      this.$store.commit({ // payload风格(对象)
        type: DECREMENT, // [xxx] 官方推荐的类型常量
        count: 100
      })
    },
    updateInfos () {
      this.$store.dispatch('aUpdataInfo', {
        message: '测试参数，我是携带的信息',
        success: () => {
          console.log('1:里面已经完成了')
        }
      })
    },
    updateInfoX () {
    // 优雅的写法
      this.$store
        .dispatch('aUpdataInfoS', '我是携带的信息')
        .then(res => {
          console.log('2:里面已经完成了')
          console.log('我是resolve：' + res)
        })
    }
  }
}
</script>

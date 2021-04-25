<template>
    <div>
        <input v-model="inputValue" />
        <button @click='handleSubmit'>dianjia</button>
        <ul>
            <test-item
            v-for="(item, index) of list"
            :key="index"
            :content="item"
            :index="index"
            @delete='handleDelete'
            ></test-item>
        </ul>
    </div>
</template>
<script>
import TestItem from './components/TestItem'
export default {
  components: {
    'test-item': TestItem
  },
  data () {
    return {
      inputValue: '',
      list: []
    }
  },
  methods: {
    handleSubmit () {
      this.list.push(this.inputValue)
      this.inputValue = ''
    },
    handleDelete (index) {
      this.list.splice(index, 1)
    }
  }
}
</script>

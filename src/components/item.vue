<template>
  <div>
    <div>count:{{count}},value:{{value}}
    <el-button @click="add">加1</el-button></div>
  </div>
</template>

<script>
import count from '../mixins/count'
export default {
  mixins: [count],
  props: {
    value: [String, Number]
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

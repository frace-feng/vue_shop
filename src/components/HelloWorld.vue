<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li>value: {{value}}</li>
      <li>checked: {{checked}}</li>
    </ul>
    <ul>

      <li><button @click='show=!show'>v-show VS v-if</button></li>
      <li v-show='show'>v-show: </li>
      <li v-if='show'>v-if: </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    msg: String,
    checked: {
      type: String,
      default: '1111'
    },
    value: String
  },
  data () {
    return {
      show: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  /* display: inline-block; */
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

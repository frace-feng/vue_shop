<template>
  <div class="home">
    <!-- <HelloWorld v-model="pro" msg="Welcome to Your Vue.js App"/> -->
    <Face />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Face from './aiFace/index.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    Face
  },
  data () {
    return {
      pro: 'aaa'
    }
  }
}
</script>

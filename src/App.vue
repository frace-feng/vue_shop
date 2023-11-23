<template>
  <div id="app">
    <router-link to="/home">home / </router-link>
    <br>
    <router-link to="/jsx">jsx / </router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>
<style>
body {
  margin: 0;
}
</style>

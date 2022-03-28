<template>
  <div id="app">
    <Add msg="Welcome to Your Vue.js App"></Add>
    <Sub msg1="Welcome to Your Vue"></Sub>
  </div>
</template>

<script>
import Add from './components/add.vue'
import Sub from './components/sub.vue'

export default {
  name: 'App',
  components: {
    Add,
    Sub
  }
}
</script>

<style>
</style>

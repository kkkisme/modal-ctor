<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <el-button @click="toggle">toggle</el-button>

   <hello-world v-if="showHello"></hello-world>
  </div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld'
export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data() {
    return {
      showHello: true
    }
  },
  methods: {
    toggle() {
      this.showHello = !this.showHello
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
<div>
  <img alt="Vue logo" height="120" src="./assets/signin.png">
  <HelloWorld msg="JSON to CSV converter"/>
  <FileUploader />
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import FileUploader from './components/FileUpload.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    FileUploader
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

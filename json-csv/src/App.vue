<template>
  <div>
    <img alt="Profuzzy logo" height="120" src="./assets/logo.png">
    <HelloWorld msg="Conversor de JSON para CSV"/>
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
  color: #139032;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <theForm></theForm>
  </div>
</template>

<script>
import theForm from "./components/form/form.vue";

export default {
  name: "app",
  components: {
    /* eslint-disable */
    theForm
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

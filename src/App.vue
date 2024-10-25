<template>
  <div id="app">
    <TheHeader />
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'

export default {
  name: 'App',
  components: {
    TheHeader
  }
}
</script>

<style>
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  body {
    width: 100%;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f8f9fa !important;
  }
</style>
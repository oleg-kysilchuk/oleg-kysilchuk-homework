<template>
  <div id="app">
    <Comp />
  </div> 
</template>

<script>

  import Comp from '@/components/Comp'

  export default {
    name: 'app',
    components: {
      Comp
    }
  }

</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-image: url("./assets/bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
  }

  #app {
    width: 100vw;
    height: 100vh;
  }

</style>

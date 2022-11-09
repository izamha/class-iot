<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/bridge.png" width="350">
    <Hello msg="Bridge Heavy Load Management System"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Hello from '@/components/Hello.vue'

export default {
  name: 'HomeView',
  components: {
    Hello,
  }
}
</script>

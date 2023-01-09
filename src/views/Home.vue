<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button class="btn btn-danger" > add</button>
    <button class="btn btn-primary" @click="gotoDaybook" > add</button>
    <button class="btn btn-secondary" > add</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    
  },
  methods: {
    gotoDaybook() {
      this.$router.push({ name: 'no-entry' })
    }
  }

}
</script>

<template>
  <div>
    <h1>About page</h1>
    <nuxt-link to="/">Home</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  created(){
      console.log('about come in created')
  },
  beforeMount(){
      console.log('about come in beforeMount')
  },
  mounted(){
    console.log('about come in mounted')
  },
  beforeUpdate(){
    console.log('about come in beforeUpdate')
  },
  updated(){
    console.log('about come in updated')
  },
  beforeDestroy(){
    console.log('about come in beforeDestroy')
  },
  destroyed(){
    console.log('about come in destroyed')
  }
}
</script>

<style>

</style>

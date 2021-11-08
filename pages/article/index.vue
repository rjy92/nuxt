<template>
  <div>
      asyncData数据显示article
      <br>
      <p>{{name}}</p>
      <p>
          {{title}}
      </p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'articlePa',
    async asyncData(){
        console.log('come in asyncData')
        const res = await axios({
            url:'http://192.168.60.18:3001/data.json'

        })
        console.log(res)
        return res.data
        
    },
    data(){
        return {
            name:'hellohellohello'
        }
    },
    
}
</script>

<style>

</style>
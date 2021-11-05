<template>
    <div>
        <!-- a 跳转链接，刷新导航，走服务端渲染 -->
        <h2>a链接</h2>
        <a href="/">首页</a>

        <h2>router-link</h2>
        <nuxt-link to="/">首页</nuxt-link>

        <h2>编程式导航</h2>
        <button @click="onCLick">去首页</button>
    </div>
</template>

<script>
export default {
    methods:{
        onCLick(){
            this.$router.push('/')
        }
    }
};
</script>

<style>
</style>
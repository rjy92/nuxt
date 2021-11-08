// 路由配置
module.exports = {
    router: {
        base: '/app/',
        routeNameSplitter: '/',
        extendRoutes(routes, resolve) {
            routes.push({
                name: 'hello',
                path: '/hello',
                component: resolve(__dirname, 'pages/about.vue')
            })
        }
    }
}
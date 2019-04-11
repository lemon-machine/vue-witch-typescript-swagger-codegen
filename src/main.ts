import App from './App.vue';


console.log("in ts entry")
Vue.use(Vuetify)
Vue.use(VueRouter)

const routes = [
    {
        path: '/', component: App,
        children: App.routes
    },
]


const router = new VueRouter({
    strict:true,
    routes
})


const app = new Vue({
    router
}).$mount('#app')
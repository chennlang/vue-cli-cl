import Vue from 'vue'
import Router from 'vue-router'
import DemoShow from '@/pages/demo/index.vue'
import Index from '@/pages/index.vue'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/demo',
            name: 'DemoShow',
            component: DemoShow
        }
    ]
})

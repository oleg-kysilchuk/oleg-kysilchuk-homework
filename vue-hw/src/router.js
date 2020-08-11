import Vue from 'vue'
import Router from 'vue-router'
import Task1 from '@/views/Task1'

Vue.use(Router)

export default new Router ({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Task1
        },

        {
            path: '/task2',
            component: () => import('./views/Task2.vue')
        }
    ]
})
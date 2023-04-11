import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/register.vue')
    },
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/home')
    },
    {
        path: '/my',
        name: 'my',
        component: () => import('@/views/my')
    },
    {
        path: '/detail',
        name: 'detail',
        component: () => import('@/views/my/detail.vue'),
    },
    {
        path: '/chpwd',
        name: 'chpwd',
        component: () => import('@/views/my/chpwd.vue'),
    },
    // 预约
    {
        path: '/hospital',
        name: 'hospital',
        component: () => import('@/views/hospital')
    },
    {
        path: '/locate',
        name: 'locate',
        component: () => import('@/views/hospital/location.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

//全局前置守卫：初始化时执行、每次路由切换前执行
// 是否登录
router.beforeEach((to, from, next) => {
    if (to.name === 'login' || to.name === 'register') {
        next()
    } else {
        if (localStorage.getItem("name") !== null) {
            next();
        } else {
            next({
                name: 'login'
            })
        }
    }
})

export default router

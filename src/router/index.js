import { createRouter, createWebHistory } from 'vue-router'
import { supabase } from '../supabase'
import Home from '../views/Home.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sign-in',
    name: 'Sign In',
    component: SignIn
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      requiresAuth: true,
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  // get current user info
  const currentUser = supabase.auth.user();
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if(requiresAuth && !currentUser) next('sign-in');
  else if(!requiresAuth && currentUser) next("/");
  else next();
})

export default router

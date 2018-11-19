import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Logar from './views/Logar.vue'
import Registro from './views/Registro.vue'
import Usuarios from './views/Usuarios.vue'
import Imagens from './views/Imagens.vue'
import EnviarImagem from './views/EnviarImagem.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Logar
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/registro',
      name: 'registro',
      component: Registro
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/usuarios',
      name: 'usuarios',
      component: Usuarios
    },
    {
      path: '/imagens',
      name: 'imagens',
      component: Imagens
    },
    {
      path: '/enviar',
      name: 'enviar',
      component: EnviarImagem
    }
    
    
  ]
})

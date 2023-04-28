import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AnchorLinkEffect from '@/views/AnchorLinkEffect.vue'
import ButtonDesignEffect from '@/views/ButtonDesignEffect.vue'
import ImageTextDesign from '@/views/ImageTextDesign.vue'
import TextEffect from '@/views/TextEffect.vue'




const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    title: 'Home'
  },
  {
    path: '/text-design-effect',
    name: 'textEffect',
    component: TextEffect,
    title: 'TextDesign'
  },
  {
    path: '/anchor-Link-design-effect',
    name: 'anchorLinkEffect',
    component: AnchorLinkEffect,
    title: 'AnchorLinkDesign'
  },
  {
    path: '/button-design-effect',
    name: 'ButtonEffect',
    component: ButtonDesignEffect,
    title: 'ButtonDesign'
  },
  {
    path: '/image-text-design',
    name: 'ImageTextEffect',
    component: ImageTextDesign,
    title: 'ImageTextDesign'
  },
  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    title: 'about'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

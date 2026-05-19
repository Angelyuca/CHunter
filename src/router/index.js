import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../pages/index.vue'
import OverviewsPage from '../pages/Overviews/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainPage,
      children: [
        {
          path: '',
          name: 'home-redirect',
          redirect: { name: 'overviews' }
        },
        {
          path: 'overviews',
          name: 'overviews',
          component: OverviewsPage,
        },
        {
          path: 'statistics',
          name: 'statistics',
        },
        {
          path: 'promo',
          name: 'promo',
        },
        {
          path: 'offers',
          name: 'offers',
        }
      ]
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router

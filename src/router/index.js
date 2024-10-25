import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/HomeView.vue';
import About from '../views/AboutView.vue';

import ClassmatesList from '../views/classmate/ClassmatesList.vue';
import ClassmateView from '../views/classmate/ClassmateView.vue';
import ClassmateEdit from '../views/classmate/ClassmateEdit.vue';
import ClassmateCreate from '../views/classmate/ClassmateCreate.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/classmates',
      name: 'classmates',
      component: ClassmatesList,
    },
    {
      path: '/classmates/create',
      name: 'create-classmate',
      component: ClassmateCreate,
    },
    {
      path: '/classmates/:id',
      name: 'view-classmate',
      component: ClassmateView,
    },
    {
      path: '/classmates/:id/edit',
      name: 'edit-classmate',
      component: ClassmateEdit,
    },
  ],
})

export default router
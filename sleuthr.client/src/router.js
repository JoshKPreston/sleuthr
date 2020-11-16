import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage'),
    beforeEnter: authGuard
  },
  {
    path: '/report-bug',
    name: 'ReportBug',
    component: loadPage('ReportBugPage'),
    beforeEnter: authGuard
  },
  {
    path: '/bugs/:id',
    name: 'Bug',
    component: loadPage('BugPage'),
    beforeEnter: authGuard
  },
  {
    path: '/bugs/edit/:id',
    name: 'EditBug',
    component: loadPage('EditBugPage'),
    beforeEnter: authGuard
  },
  {
    path: '/archive',
    name: 'Archive',
    component: loadPage('ArchivePage'),
    beforeEnter: authGuard
  },
  {
    path: '/profile',
    name: 'Profile',
    component: loadPage('ProfilePage'),
    beforeEnter: authGuard
  }
]

const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

export default router

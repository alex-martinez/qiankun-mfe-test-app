export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./views/HomeView.vue'),
  },
  {
    path: '/about-us',
    name: 'about-us',
    component: () => import('./views/AboutUsView.vue'),
  },
  {
    path: '/contact-us',
    name: 'contact-us',
    component: () => import('./views/ContactUsView.vue'),
  },
];

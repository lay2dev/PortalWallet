import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'send', component: () => import('pages/Send.vue') },
      { path: 'send/batch', component: () => import('pages/SendBatch.vue') },
      { path: 'swap', component: () => import('pages/Swap.vue') },
      { path: 'shop', component: () => import('pages/Shop.vue') },
      {
        path: 'shop/order/:sid',
        component: () => import('pages/Order.vue'),
        props: true
      },
      { path: 'shop/orders', component: () => import('pages/Orders.vue') },
      {
        path: 'contacts',
        component: () => import('pages/Contacts.vue')
      },
      {
        path: 'contacts/:id',
        component: () => import('pages/EditContact.vue'),
        props: true
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;

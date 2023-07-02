import { lazy } from 'solid-js';
import { type RouteDefinition } from '@solidjs/router';

const routes: RouteDefinition[] = [
  {
    path: '/',
    component: lazy(() => import('./pages/home')),
  },
  {
    path: '/about',
    component: lazy(() => import('./pages/about')),
  },
  {
    path: '**',
    component: lazy(() => import('./pages/404')),
  },
];

export default routes;

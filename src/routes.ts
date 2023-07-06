import { lazy } from 'solid-js';
import { type RouteDefinition } from '@solidjs/router';
type RouteConfig = Omit<RouteDefinition, 'children'> & {
  children?: RouteConfig[];
  meta?: {
    icon?: string;
    key: string;
    name: string;
    visible?: boolean;
  };
};
const routes: RouteConfig[] = [
  {
    path: '/',
    component: lazy(() => import('./pages/home')),
  },
  {
    path: '/components',
    children: [
      {
        path: 'icon',
        component: lazy(() => import('./pages/icon-page')),
        meta: {
          name: 'Icon',
          key: 'icon',
          visible: true,
        },
      },
      {
        path: 'button',
        component: lazy(() => import('./pages/button-page')),
        meta: {
          name: 'Button',
          key: 'button',
          visible: true,
        },
      },
    ],
  },

  {
    path: '**',
    component: lazy(() => import('./pages/404')),
  },
];

export default routes;
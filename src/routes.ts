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
      {
        path: 'input',
        component: lazy(() => import('./pages/input-page')),
        meta: {
          name: 'Input',
          key: 'input',
          visible: true,
        },
      },
      {
        path: 'textarea',
        component: lazy(() => import('./pages/textarea-page')),
        meta: {
          name: 'Textarea',
          key: 'textarea',
          visible: true,
        },
      },
      {
        path: 'avatar',
        component: lazy(() => import('./pages/avatar-page')),
        meta: {
          name: 'Avatar',
          key: 'avatar',
          visible: true,
        },
      },
      {
        path: 'popup',
        component: lazy(() => import('./pages/popup-page')),
        meta: {
          name: 'Popup',
          key: 'popup',
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

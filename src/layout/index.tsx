import { type Component } from 'solid-js';
import SideMenu from './components/SideMenu';
import { RouteDefinition, useRoutes } from '@solidjs/router';
import routes from '@/routes';
import style from './index.module.scss';

const Layout: Component = () => {
  const Route = useRoutes(routes as RouteDefinition[]);
  console.log(routes);

  return (
    <div class={style.layout}>
      <SideMenu />
      <main p-16px>
        <Route />
      </main>
    </div>
  );
};

export default Layout;

import { type Component } from 'solid-js';
import SideMenu from './components/SideMenu';
import { RouteDefinition, useRoutes } from '@solidjs/router';
import routes from '@/routes';

const Layout: Component = () => {
  const Route = useRoutes(routes as RouteDefinition[]);

  return (
    <div flex>
      <SideMenu />
      <main flex-1 p-16px>
        <Route />
      </main>
    </div>
  );
};

export default Layout;

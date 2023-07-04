import { type Component } from 'solid-js';
import SideMenu from './components/SideMenu';
import { RouteDefinition, useRoutes } from '@solidjs/router';
import routes from '@/routes';

const Layout: Component = () => {
  const Route = useRoutes(routes as RouteDefinition[]);

  return (
    <div h-100vh flex overflow-hidden>
      <SideMenu class="flex-shrink-0" />
      <main flex-1 p-16px box-border overflow-auto>
        <Route />
      </main>
    </div>
  );
};

export default Layout;

import { type Component } from 'solid-js';
import SideMenu from './components/SideMenu';
import { useRoutes } from '@solidjs/router';
import routes from '@/routes';
import style from './style/index.module.scss';

const Layout: Component = () => {
  const Route = useRoutes(routes);
  return (
    <div class={style.layout}>
      <SideMenu />
      <main>
        <Route />
      </main>
    </div>
  );
};

export default Layout;

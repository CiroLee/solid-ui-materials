import { type Component, For, Show } from 'solid-js';
import SIcon from '@/components/SIcon';
import { A } from '@solidjs/router';
import routes from '@/routes';
interface SideMenuProps {
  class?: string;
}
const SideMenu: Component<SideMenuProps> = (props) => {
  const components = routes.find((r) => r.path === '/components');
  const menus = components ? components?.children?.filter((c) => c.meta?.visible) : [];
  return (
    <div class={props.class} w-200px h-100vh overflow-hidden border="~ r-1px solid #e6e5e5" box-border p-12px>
      <A
        href="/"
        class="decoration-none text-inherit px-8px h-44px mb-2 flex items-center font-bold 
        cursor-pointer">
        solid-ui-materials
      </A>
      <For each={menus}>
        {(menu) => (
          <A
            href={`/components/${menu?.path}`}
            class="decoration-none flex items-center h-36px px-8px rounded transition-all transition-200! 
            hover:(bg-#f4f4f4 text-#959595)"
            activeClass="text-inherit"
            inactiveClass="text-#b2b2b2">
            <Show when={menu?.meta?.icon}>
              <SIcon name={menu.meta?.icon} class="mr-2" />
            </Show>
            <span>{menu?.meta?.name}</span>
          </A>
        )}
      </For>
    </div>
  );
};

export default SideMenu;

import { type Component, type JSX, For, mergeProps, createSignal } from 'solid-js';
import './index.scss';
export interface STabItem {
  key: string;
  content: JSX.Element;
  disabled?: boolean;
}
interface STabsProps {
  defaultKey: string;
  tabs: STabItem[];
  class?: string;
  style?: JSX.CSSProperties;
  onChange?: (key: string) => void;
}
const STabs: Component<STabsProps> = (props) => {
  const merged = mergeProps(
    {
      class: '',
      style: {},
    },
    props,
  );
  const [activeKey, setActiveKey] = createSignal(props.defaultKey);
  const tabChangeClick = (tab: STabItem) => {
    if (tab.disabled) return;
    setActiveKey(tab.key);
    props.onChange?.(tab.key);
  };
  return (
    <div class={`s-tabs ${merged.class}`.replace(/\s{2,}/g, ' ').trim()}>
      <For each={props.tabs}>
        {(tab) => (
          <div
            class="s-tabs__item"
            classList={{ 's-tabs__item--active': tab.key === activeKey(), 's-tabs__item--disabled': tab.disabled }}
            onClick={() => tabChangeClick(tab)}>
            {tab.content}
          </div>
        )}
      </For>
    </div>
  );
};

export default STabs;

import { type ParentComponent, type JSX, mergeProps, For, Show } from 'solid-js';
import './index.scss';
// the keys map to the corresponding icons
export type KbdKey =
  | 'command'
  | 'shift'
  | 'ctrl'
  | 'option'
  | 'enter'
  | 'delete'
  | 'escape'
  | 'tab'
  | 'capslock'
  | 'up'
  | 'right'
  | 'down'
  | 'left'
  | 'pageup'
  | 'pagedown'
  | 'home'
  | 'end'
  | 'help'
  | 'space';

const kbdKeysMap: Record<KbdKey, string> = {
  command: '⌘',
  shift: '⇧',
  ctrl: '⌃',
  option: '⌥',
  enter: '⏎',
  delete: '⌦',
  escape: '⎋',
  tab: '⇥',
  capslock: '⇪',
  up: '↑',
  right: '→',
  down: '↓',
  left: '←',
  pageup: '⇞',
  pagedown: '⇟',
  home: '⇱',
  end: '⇲',
  help: '?',
  space: '␣',
};

interface KbdProps {
  keys?: KbdKey[];
  class?: string;
  style?: JSX.CSSProperties;
}
const Kbd: ParentComponent<KbdProps> = (props) => {
  const merged = mergeProps(
    {
      class: '',
      style: {},
    },
    props,
  );
  const renderKeys = () => {
    if (!props.keys || !props.keys.length) return;
    return props.keys.map((key) => {
      return kbdKeysMap[key] || '';
    });
  };
  return (
    <div class={`s-kbd ${merged.class}`.replace(/\s{2,}/g, ' ').trim()} style={merged.style}>
      <For each={renderKeys()}>{(key) => <span class="s-kbd__item">{key}</span>}</For>
      <Show when={props.children}>
        <span class="s-kbd__item">{merged.children}</span>
      </Show>
    </div>
  );
};

export default Kbd;

import { type ParentComponent, type JSX, mergeProps, Show, Switch, Match } from 'solid-js';
import './index.scss';
interface SBrowserFrameProps {
  type: 'macos' | 'windows';
  url?: string;
  title?: string;
  class?: string;
  style?: JSX.CSSProperties;
}
const SBrowserFrame: ParentComponent<SBrowserFrameProps> = (props) => {
  const merged = mergeProps(
    {
      url: '',
      title: '',
      class: '',
      style: {},
    },
    props,
  );
  return (
    <div class={`s-browser-frame ${merged.class}`.replace(/\s{2,}/g, ' ').trim()} style={merged.style}>
      <header class="s-browser-frame__header">
        <Show when={merged.type === 'macos'}>
          <div class="s-browser-frame__control s-browser-frame__macos--icon">
            <li />
            <li />
            <li />
          </div>
        </Show>
        <Switch>
          <Match when={merged.url}>
            <div class="s-browser-frame__header--content">
              <a href={merged.url} target="_blank">
                {merged.url}
              </a>
            </div>
          </Match>
          <Match when={merged.title}>
            <div class="s-browser-frame__header--content">{merged.title}</div>
          </Match>
        </Switch>
        <Show when={merged.type === 'windows'}>
          <div class="s-browser-frame__control s-browser-frame__windows--icon">
            <li />
            <li />
            <li />
          </div>
        </Show>
      </header>
      <div>{merged.children}</div>
    </div>
  );
};

export default SBrowserFrame;

import { type Component, type JSX, Switch, Match, mergeProps } from 'solid-js';
import './index.scss';
interface SAvatarProps {
  src?: string;
  text?: string;
  size?: 'tiny' | 'small' | 'medium' | 'large';
  shape?: 'circle' | 'square';
  alt?: string;
  class?: string;
  style?: JSX.CSSProperties | string;
}

function DefaultAvatar() {
  return <div class="s-avatar s-avatar__default" />;
}
const SAvatar: Component<SAvatarProps> = (props) => {
  const merged = mergeProps(
    {
      size: 'medium',
      shape: 'circle',
      class: '',
      alt: 'img',
      style: '',
    },
    props,
  );
  return (
    <div
      class={`s-avatar s-avatar--${merged.size} s-avatar--${merged.shape} ${merged.class}`
        .replace(/\s{2,}/g, ' ')
        .trim()}
      style={merged.style}>
      <Switch fallback={<DefaultAvatar />}>
        <Match when={merged.src}>
          <img class="s-avatar__img" src={merged.src} alt={merged.alt} />
        </Match>
        <Match when={merged.text}>
          <div class="s-avatar__text">{merged.text}</div>
        </Match>
      </Switch>
    </div>
  );
};

export default SAvatar;

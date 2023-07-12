import { type Component, type JSX, mergeProps } from 'solid-js';
import './index.scss';
interface SIconProps {
  name: string;
  title?: string;
  color?: string;
  size?: string;
  class?: string;
  style?: JSX.CSSProperties;
  gradient?: string;
  onClick?: () => void;
}

const SIcon: Component<SIconProps> = (props) => {
  const merged = mergeProps(
    {
      title: '',
      class: '',
      gradient: '',
      color: 'inherit',
      size: 'inherit',
      style: {},
    },
    props,
  );
  const onClickHandler = () => {
    props.onClick && props.onClick();
  };
  return (
    <i
      title={merged.title}
      class={`s-icon ri-${merged.name} ${merged.class}`.replace(/\s{2,}/g, ' ').trim()}
      classList={{ 's-icon__gradient': !!props.gradient }}
      style={{ ...merged.style, '--color': merged.color, '--size': merged.size, '--gradient': props.gradient }}
      onClick={onClickHandler}
    />
  );
};

export default SIcon;

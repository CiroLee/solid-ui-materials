import { type Component } from 'solid-js';
import './index.scss';
interface SIconProps {
  name?: string;
  color?: string;
  size?: string;
  class?: string;
  gradient?: string;
  onClick?: () => void;
}

const SIcon: Component<SIconProps> = (props) => {
  const onClickHandler = () => {
    props.onClick && props.onClick();
  };
  return (
    <i
      class={`s-icon ri-${props.name} ${props.class || ''}`.replace(/\s{2,}/g, ' ').trim()}
      classList={{ 's-icon__gradient': !!props.gradient }}
      style={{ '--color': props.color, '--size': props.size, '--gradient': props.gradient }}
      onClick={onClickHandler}
    />
  );
};

export default SIcon;

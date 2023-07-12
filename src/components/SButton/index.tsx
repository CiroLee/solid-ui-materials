import { type Component, type JSX, mergeProps } from 'solid-js';
import './index.scss';
interface SButtonProps {
  class?: string;
  type?: 'default' | 'primary' | 'success' | 'warn' | 'danger' | 'text';
  size?: 'small' | 'medium' | 'large';
  round?: boolean;
  circle?: boolean;
  disabled?: boolean;
  block?: boolean;
  loading?: boolean;
  style?: JSX.CSSProperties;
  children?: JSX.Element;
  onClick?: () => void;
}
const SButton: Component<SButtonProps> = (props) => {
  const merged = mergeProps(
    {
      size: 'medium',
      type: 'default',
      class: '',
      style: {},
    },
    props,
  );
  const onClickHandler = () => {
    props.onClick && props.onClick();
  };
  return (
    <button
      tabindex="0"
      disabled={props.disabled}
      class={`s-button s-button--${merged.size} s-button--${merged.type}
       ${merged.loading ? 's-button--loading' : ''} ${merged.round ? 's-button--round' : ''} ${
         merged.circle ? 's-button--circle' : ''
       } ${merged.block ? 's-button--block' : ''} ${merged.class}`
        .replace(/\s{2,}/g, ' ')
        .trim()}
      style={merged.style}
      onClick={onClickHandler}>
      {props.children}
    </button>
  );
};

export default SButton;

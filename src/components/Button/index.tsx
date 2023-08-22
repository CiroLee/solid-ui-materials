import { type Component, type JSX, mergeProps } from 'solid-js';
import './index.scss';
interface ButtonProps {
  class?: string;
  type?: 'default' | 'primary' | 'success' | 'warn' | 'danger' | 'text';
  size?: 'tiny' | 'small' | 'medium' | 'large';
  shape?: 'round' | 'square' | 'circle' | 'default';
  disabled?: boolean;
  block?: boolean;
  loading?: boolean;
  outline?: boolean;
  style?: JSX.CSSProperties;
  children?: JSX.Element;
  onClick?: () => void;
}
const Button: Component<ButtonProps> = (props) => {
  const merged = mergeProps(
    {
      size: 'medium',
      type: 'primary',
      shape: 'default',
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
       s-button--shape-${merged.shape}
       ${merged.class}`
        .replace(/\s{2,}/g, ' ')
        .trim()}
      classList={{
        's-button--loading': merged.loading,
        's-button--block': merged.block,
        's-button--outline': merged.outline,
      }}
      style={merged.style}
      onClick={onClickHandler}>
      {props.children}
    </button>
  );
};

export default Button;

import { type Component, type JSX } from 'solid-js';
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
  children?: JSX.Element;
  onClick?: () => void;
}
const SButton: Component<SButtonProps> = (props) => {
  const onClickHandler = () => {
    props.onClick && props.onClick();
  };
  return (
    <button
      tabindex="0"
      disabled={props.disabled}
      class={`s-button ${props.size ? `s-button--${props.size}` : 's-button--medium'} ${
        props.type ? `s-button--${props.type}` : 's-button--default'
      } ${props.loading ? 's-button--loading' : ''} ${props.round ? 'round' : ''} ${props.circle ? 'circle' : ''} ${
        props.block ? 'block' : ''
      } ${props.class || ''}`
        .replace(/\s{2,}/g, ' ')
        .trim()}
      onClick={onClickHandler}>
      {props.children}
    </button>
  );
};

export default SButton;

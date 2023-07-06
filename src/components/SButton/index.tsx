import { type Component, type JSX } from 'solid-js';
import './index.scss';
interface SButtonProps {
  type?: 'default' | 'primary' | 'success' | 'warn' | 'danger' | 'text';
  size?: 'small' | 'medium' | 'large';
  round?: boolean;
  circle?: boolean;
  disabled?: boolean;
  block?: boolean;
  children?: JSX.Element;
}
const SButton: Component<SButtonProps> = (props) => {
  return (
    <button
      tabindex="0"
      disabled={props.disabled}
      class={`s-button ${props.size ? `s-button--${props.size}` : 's-button--medium'} ${
        props.type ? `s-button--${props.type}` : 's-button--default'
      } ${props.round ? 'round' : ''} ${props.circle ? 'circle' : ''} ${props.block ? 'block' : ''}`.replace(
        /^\s*|\s*$/g,
        '',
      )}>
      {props.children}
    </button>
  );
};

export default SButton;

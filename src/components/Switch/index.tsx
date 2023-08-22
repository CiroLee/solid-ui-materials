import { type Component, type JSX, mergeProps } from 'solid-js';
import './index.scss';
interface SwitchProps {
  checked?: boolean;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  style?: JSX.CSSProperties;
  class?: string;
  onChange?: (checked: boolean) => void;
}
const Switch: Component<SwitchProps> = (props) => {
  const merged = mergeProps(
    {
      size: 'medium',
      class: '',
      style: {},
    },
    props,
  );
  const onChangeHandler = (e: Event) => {
    const target = e.target as HTMLInputElement;
    props.onChange?.(target.checked);
  };
  return (
    <label
      tabindex="0"
      class={`s-switch s-switch--${merged.size} ${merged.class}`.replace(/\s{2,}/g, ' ').trim()}
      style={merged.style}>
      <input
        tabindex="-1"
        type="checkbox"
        checked={merged.checked}
        disabled={merged.disabled}
        onInput={onChangeHandler}
      />
      <div class="s-switch__track" />
    </label>
  );
};

export default Switch;

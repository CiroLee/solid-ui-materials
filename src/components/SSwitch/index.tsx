import { type Component, type JSX, mergeProps } from 'solid-js';
import './index.scss';
interface SSwitchProps {
  checked?: boolean;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  style?: JSX.CSSProperties;
  class?: string;
}
const SSwitch: Component<SSwitchProps> = (props) => {
  const merged = mergeProps(
    {
      size: 'medium',
      class: '',
    },
    props,
  );
  return (
    <label class={`s-switch s-switch--${merged.size} ${merged.class}`.replace(/\s{2,}/g, ' ').trim()}>
      <input type="checkbox" checked={merged.checked} disabled={merged.disabled} />
      <div class="s-switch__track" />
    </label>
  );
};

export default SSwitch;

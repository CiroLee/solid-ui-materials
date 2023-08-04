import { type Component, type JSX, mergeProps, For } from 'solid-js';
import './index.scss';
export interface SRadioProps {
  checked?: boolean;
  disabled?: boolean;
  class?: string;
  style?: JSX.CSSProperties;
  children?: JSX.Element;
  onChange?: (event: Event) => void;
}

const SRadio: Component<SRadioProps> = (props) => {
  const merged = mergeProps(
    {
      class: '',
      style: {},
    },
    props,
  );
  const onChangeHandler = (e: Event) => {
    props.onChange?.(e);
  };
  return (
    <label class={`s-radio ${merged.class}`.replace(/\s{2,}/g, ' ').trim()} style={merged.style}>
      <input type="radio" disabled={merged.disabled} checked={merged.checked} onChange={onChangeHandler} />
      <div class="s-radio__track" />
      <div class="s-radio__children">{merged.children}</div>
    </label>
  );
};

export default SRadio;

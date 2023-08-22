import { type Component, type JSX, mergeProps, For } from 'solid-js';
import './index.scss';
export interface CheckboxProps {
  checked?: boolean;
  disabled?: boolean;
  children?: JSX.Element;
  class?: string;
  style?: JSX.CSSProperties;
  onChange?: (e: Event) => void;
}

const Checkbox: Component<CheckboxProps> = (props) => {
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
    <label class={`s-checkbox ${merged.class}`.replace(/\s{2,}/g, ' ').trim()} style={merged.style}>
      <input type="checkbox" checked={merged.checked} disabled={merged.disabled} onChange={onChangeHandler} />
      <div class="s-checkbox__track" />
      <div class="s-checkbox__children">{merged.children}</div>
    </label>
  );
};

export default Checkbox;

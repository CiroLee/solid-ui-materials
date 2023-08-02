import { type Component, type JSX, mergeProps, For } from 'solid-js';
import './index.scss';
export interface SRadioProps {
  checked?: boolean;
  disabled?: boolean;
  value?: string | number; // use for group
  class?: string;
  style?: JSX.CSSProperties;
  children?: JSX.Element;
  onChange?: (event: Event) => void;
}

export interface SRadioGroupOptions extends Omit<SRadioProps, 'checked'> {
  value: string | number;
}

export interface SRadioGroupProps {
  value?: string | number;
  options: SRadioGroupOptions[];
  class?: string;
  style?: JSX.CSSProperties;
  onChange?: (value: string | number) => void;
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
    <label class={`s-radio ${merged.class}`.replace(/\s{2,}/g, ' ').trim()}>
      <input type="radio" disabled={merged.disabled} checked={merged.checked} onChange={onChangeHandler} />
      <div class="s-radio__track" />
      <div class="s-radio__children">{merged.children}</div>
    </label>
  );
};

const SRadioGroup: Component<SRadioGroupProps> = (props) => {
  const merged = mergeProps(
    {
      class: '',
      style: {},
    },
    props,
  );
  const onChangeHandler = (e: Event, value: string | number) => {
    const target = e.currentTarget as HTMLInputElement;
    props.onChange?.(value);
  };
  return (
    <div class={`s-radio-group ${merged.class}`.replace(/\s{2,}/g, ' ').trim()}>
      <For each={merged.options}>
        {(option) => (
          <SRadio
            {...option}
            checked={option.value === merged.value}
            onChange={(e) => onChangeHandler(e, option.value)}
          />
        )}
      </For>
    </div>
  );
};

export default SRadio;
export { SRadioGroup };

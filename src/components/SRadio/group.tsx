import { type Component, type JSX, For, mergeProps } from 'solid-js';
import SRadio, { SRadioProps } from './radio';
import './index.scss';
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
    <div class={`s-radio-group ${merged.class}`.replace(/\s{2,}/g, ' ').trim()} style={merged.style}>
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

export default SRadioGroup;

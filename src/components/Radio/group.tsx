import { type Component, type JSX, For, mergeProps } from 'solid-js';
import Radio, { RadioProps } from './radio';
import './index.scss';
export interface RadioGroupOptions extends Omit<RadioProps, 'checked'> {
  value: string | number;
}

export interface RadioGroupProps {
  value?: string | number;
  options: RadioGroupOptions[];
  class?: string;
  style?: JSX.CSSProperties;
  onChange?: (value: string | number) => void;
}
const RadioGroup: Component<RadioGroupProps> = (props) => {
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
          <Radio
            {...option}
            checked={option.value === merged.value}
            onChange={(e) => onChangeHandler(e, option.value)}
          />
        )}
      </For>
    </div>
  );
};

export default RadioGroup;

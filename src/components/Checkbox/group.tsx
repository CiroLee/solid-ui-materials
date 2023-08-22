import { type Component, type JSX, mergeProps, For, createEffect } from 'solid-js';
import Checkbox, { type CheckboxProps } from './checkbox';
import './index.scss';
export interface CheckboxGroupOptions extends Omit<CheckboxProps, 'checked'> {
  value: string | number;
}
export interface CheckboxGroupProps {
  value?: string | number;
  options: CheckboxGroupOptions[];
  class?: string;
  style?: JSX.CSSProperties;
  onChange?: (list: (string | number)[]) => void;
}

const CheckboxGroup: Component<CheckboxGroupProps> = (props) => {
  let list: (string | number)[] = [];
  const merged = mergeProps(
    {
      class: '',
      value: '',
      style: {},
    },
    props,
  );
  const onChangeHandler = (e: Event, value: string | number) => {
    const target = e.currentTarget as HTMLInputElement;
    list = target.checked ? [...list, value] : list.filter((item) => item !== value);

    props.onChange?.(list);
  };

  createEffect(() => {
    list = [...list, merged.value];
  });

  return (
    <div class={`s-checkbox-group ${merged.class}`.replace(/\s{2,}/g, ' ').trim()} style={merged.style}>
      <For each={merged.options}>
        {(option) => (
          <Checkbox
            {...option}
            checked={option.value === merged.value}
            onChange={(e) => onChangeHandler(e, option.value)}
          />
        )}
      </For>
    </div>
  );
};

export default CheckboxGroup;

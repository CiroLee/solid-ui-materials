import { type Component, type JSX, mergeProps, For, createEffect } from 'solid-js';
import SCheckbox, { type SCheckboxProps } from './checkbox';
import './index.scss';
export interface SCheckboxGroupOptions extends Omit<SCheckboxProps, 'checked'> {
  value: string | number;
}
export interface SCheckboxGroupProps {
  value?: string | number;
  options: SCheckboxGroupOptions[];
  class?: string;
  style?: JSX.CSSProperties;
  onChange?: (list: (string | number)[]) => void;
}

const SCheckboxGroup: Component<SCheckboxGroupProps> = (props) => {
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
          <SCheckbox
            {...option}
            checked={option.value === merged.value}
            onChange={(e) => onChangeHandler(e, option.value)}
          />
        )}
      </For>
    </div>
  );
};

export default SCheckboxGroup;

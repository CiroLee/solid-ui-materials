import { type Component, type JSX, Show, createEffect, createSignal } from 'solid-js';
import SIcon from '../SIcon';
import './index.scss';
interface SInputProps {
  value?: string;
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
  status?: 'warn' | 'error';
  size?: 'small' | 'medium' | 'large';
  maxLength?: number;
  disabled?: boolean;
  prefix?: JSX.Element;
  suffix?: JSX.Element;
  clearable?: boolean;
  showCount?: boolean;
  readonly?: boolean;
  countWidth?: string;
  class?: string;
  onChange?: (value: string) => void;
}
const SInput: Component<SInputProps> = (props) => {
  const [count, setCount] = createSignal('');
  const onInputHandler = (e: Event) => {
    const target = e.target as HTMLInputElement;
    if (props.maxLength && target.value.length > props.maxLength) {
      target.value = target.value.slice(0, props.maxLength);
      return;
    }
    props.onChange && props.onChange(target.value);
  };
  createEffect(() => {
    if (!props.showCount) return;
    if (props.maxLength) {
      setCount(`${props.value?.length}/${props.maxLength}`);
    } else {
      setCount(`${props.value?.length}`);
    }
  });
  return (
    <div
      class={`s-input ${props.size ? `s-input--${props.size}` : 's-input--medium'} ${
        props.status ? `s-input--${props.status}` : ''
      } ${props.class || ''}`
        .replace(/\s{2,}/g, ' ')
        .trim()}
      style={{ '--count-width': props.countWidth }}
      data-count={count()}>
      <Show when={props.prefix}>
        <div class="s-input__prefix">{props.prefix}</div>
      </Show>
      <input
        type={props.type || 'text'}
        disabled={props.disabled}
        readonly={props.readonly}
        value={props.value || ''}
        placeholder={props.placeholder}
        onInput={onInputHandler}
      />
      <Show when={props.suffix}>
        <div class="s-input__suffix">{props.suffix}</div>
      </Show>
      <Show when={props.clearable && props.value}>
        <div class="s-input__suffix s-input__clear" onClick={() => props.onChange?.('')}>
          <SIcon name="close-circle-fill" />
        </div>
      </Show>
      <Show when={props.showCount}>
        <span class="s-input__suffix s-input__count">{count()}</span>
      </Show>
    </div>
  );
};

export default SInput;

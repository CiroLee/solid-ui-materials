import { type Component, type JSX, Show, mergeProps, createEffect, createSignal, Switch, Match } from 'solid-js';
import Icon from '../Icon';
import './index.scss';
interface InputProps {
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
  style?: JSX.CSSProperties;
  onChange?: (value: string) => void;
}
const Input: Component<InputProps> = (props) => {
  const merged = mergeProps(
    {
      size: 'medium',
      countWidth: '0px',
      class: '',
      style: {},
    },
    props,
  );
  const [count, setCount] = createSignal('');
  const [asPassword, setAsPassword] = createSignal(true);
  const inputType = () => {
    if (props.type === 'password') {
      return asPassword() ? 'password' : 'text';
    }
    return props.type || 'text';
  };
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
      class={`s-input s-input--${merged.size} ${merged.status ? `s-input--${merged.status}` : ''} 
      ${merged.class}`
        .replace(/\s{2,}/g, ' ')
        .trim()}
      style={{ ...merged.style, '--count-width': merged.countWidth }}>
      <Show when={props.prefix}>
        <div class="s-input__prefix">{props.prefix}</div>
      </Show>
      <input
        type={inputType()}
        disabled={props.disabled}
        readonly={props.readonly}
        value={props.value || ''}
        placeholder={props.placeholder}
        onInput={onInputHandler}
      />
      <Switch>
        <Match when={props.suffix}>
          <div class="s-input__suffix">{props.suffix}</div>
        </Match>
        <Match when={props.clearable && props.value}>
          <div class="s-input__suffix s-input__clear" onClick={() => props.onChange?.('')}>
            <Icon name="close-circle-fill" />
          </div>
        </Match>
        <Match when={props.showCount}>
          <span class="s-input__suffix s-input__count">{count()}</span>
        </Match>
        <Match when={props.type === 'password'}>
          <div class="s-input__suffix s-input__clear" onClick={() => setAsPassword(!asPassword())}>
            <Icon name={`${asPassword() ? 'eye-close-line' : 'eye-line'}`} />
          </div>
        </Match>
      </Switch>
    </div>
  );
};

export default Input;

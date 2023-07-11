import { type Component, Show, createSignal, createEffect } from 'solid-js';
import SIcon from '../SIcon';
import './index.scss';
interface STextareaProps {
  value?: string;
  rows?: number;
  placeholder?: string;
  status?: 'warn' | 'error';
  maxLength?: number;
  disabled?: boolean;
  clearable?: boolean;
  showCount?: boolean;
  readonly?: boolean;
  resize?: 'none' | 'both' | 'vertical' | 'horizontal';
  class?: string;
  onChange?: (text: string) => void;
}
const STextarea: Component<STextareaProps> = (props) => {
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
      class={`s-textarea ${props.status ? `s-textarea--${props.status}` : ''} ${props.class || ''}`
        .replace(/\s{2,}/g, ' ')
        .trim()}
      style={{ '--resize': props.resize || 'both' }}>
      <textarea
        value={props.value || ''}
        disabled={props.disabled}
        readonly={props.readonly}
        rows={props.rows || 5}
        placeholder={props.placeholder}
        onInput={onInputHandler}
      />
      <Show when={props.clearable && props.value}>
        <SIcon class="s-textarea__suffix" name="close-circle-fill" onClick={() => props.onChange?.('')} />
      </Show>
      <Show when={props.showCount}>
        <span class="s-textarea__count">{count()}</span>
      </Show>
    </div>
  );
};

export default STextarea;

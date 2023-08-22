/* eslint-disable solid/no-innerhtml */
import { type Component, onMount, createSignal, Show } from 'solid-js';
import Button from '@/components/Button';
import style from './code-view.module.scss';
import 'highlight.js/styles/atom-one-dark.css';
interface CodeViewProps {
  content: string;
}
const MAX_HEIGHT = 400;
const CodeView: Component<CodeViewProps> = (props) => {
  const [showExpand, setShowExpand] = createSignal(false);
  const [expandToggle, setExpandToggle] = createSignal(false);
  let ref: HTMLDivElement | undefined;
  onMount(() => {
    if (ref) {
      const { height } = ref.getBoundingClientRect();
      if (height > MAX_HEIGHT) {
        setShowExpand(true);
      }
    }
  });
  return (
    <div
      relative
      box-border
      my-12px
      class="max-w-76% rounded-6px overflow-hidden"
      classList={{ 'max-h-200px': showExpand() && !expandToggle() }}>
      <div ref={ref} class={style['code-view']} innerHTML={props.content} />
      <Show when={showExpand()}>
        <div absolute bottom-0 flex flex-center w-full h-60px bg-gradient-to-b from-transparent to-gray-800>
          <Button class="" size="tiny" onClick={() => setExpandToggle(!expandToggle())}>
            {expandToggle() ? 'collapse' : 'expand'}
          </Button>
        </div>
      </Show>
    </div>
  );
};

export default CodeView;

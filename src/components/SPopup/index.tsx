import { type Component, type JSX, createSignal, createEffect, Show, onCleanup } from 'solid-js';
import './index.scss';
export type Placement = 'top' | 'bottom' | 'left' | 'right' | 'center';
interface PopupProps {
  show: boolean;
  children?: JSX.Element;
  isBlur?: boolean;
  maskClosable?: boolean;
  placement?: Placement;
  onCancel?: () => void;
}
const SPopup: Component<PopupProps> = (props) => {
  let maskRef: HTMLDivElement | undefined;
  let contentRef: HTMLDivElement | undefined;
  const [visibleAni, setVisibleAni] = createSignal(false);
  const [readyToHidden, setReadyToHidden] = createSignal(false);
  const [endHidden, setEndHidden] = createSignal(true);
  const maskClick = () => {
    if (!props.maskClosable) return;
    setVisibleAni(false);
    props?.onCancel?.();
  };

  // ready to hidden
  createEffect(() => {
    if (props.show) {
      setReadyToHidden(true);
      setEndHidden(false);
    }
    // to async
    setTimeout(() => {
      setVisibleAni(props.show);
    }, 0);
  });

  // listen the end of transition
  createEffect(() => {
    if (props.show) {
      maskRef &&
        maskRef.addEventListener('transitionend', function () {
          if (!visibleAni() && readyToHidden()) {
            setEndHidden(true);
          }
        });
    }
  });

  onCleanup(() => {
    maskRef &&
      maskRef.removeEventListener('transitionend', function () {
        // console.log('unmounted');
      });
  });

  return (
    <Show when={props.show || !endHidden()}>
      <div class="s-popup">
        <div
          ref={maskRef}
          class={`s-popup__mask ${props.isBlur ? 's-popup__mask--blur' : ''}`.replace(/\s{2,}/g, ' ').trim()}
          classList={{ show: visibleAni() }}
          onClick={maskClick}
        />
        <div
          ref={contentRef}
          class={`s-popup__content ${props.placement || 'center'}`}
          classList={{ show: visibleAni() }}>
          {props.children}
        </div>
      </div>
    </Show>
  );
};

export default SPopup;

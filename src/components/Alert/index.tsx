import { type Component, type JSX, mergeProps, Show } from 'solid-js';
import Icon from '../Icon';
import './index.scss';

type AlertType = 'info' | 'success' | 'warn' | 'error';

interface AlertProps {
  type?: AlertType;
  title?: string;
  description?: JSX.Element;
  showIcon?: boolean;
  class?: string;
  style?: JSX.CSSProperties;
  action?: JSX.Element;
}

const Alert: Component<AlertProps> = (props) => {
  const merged = mergeProps(
    {
      type: 'info',
      class: '',
      style: {},
    },
    props,
  );
  const getIconName = () => {
    const iconMap = {
      info: 'information-fill',
      success: 'checkbox-circle-fill',
      warn: 'information-fill',
      error: 'close-circle-fill',
    };
    return iconMap[merged.type as AlertType];
  };
  return (
    <div class={`s-alert s-alert--${merged.type} ${merged.class}`.replace(/\s{2,}/g, ' ').trim()} style={merged.style}>
      <Show when={merged.showIcon}>
        <Icon name={getIconName()} size="24px" class="s-alert__prefix" />
      </Show>
      <div class="s-alert__content">
        <Show when={merged.title}>
          <div class="s-alert__title">{merged.title}</div>
        </Show>
        <div class="s-alert__description">{merged.description}</div>
      </div>
      <Show when={merged.action}>{merged.action}</Show>
    </div>
  );
};

export default Alert;

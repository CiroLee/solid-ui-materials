import { type Component, type JSX, mergeProps } from 'solid-js';
import './index.scss';
interface SSkeletonProps {
  class?: string;
  style?: JSX.CSSProperties;
  type?: 'shimmer' | 'flicker';
}
const SSkeleton: Component<SSkeletonProps> = (props) => {
  const merged = mergeProps(
    {
      type: 'flicker',
      class: '',
      style: {},
    },
    props,
  );
  return (
    <div
      class={`s-skeleton  s-skeleton--${merged.type} ${merged.class}`.replace(/\s{2,}/g, ' ').trim()}
      style={merged.style}
    />
  );
};

export default SSkeleton;

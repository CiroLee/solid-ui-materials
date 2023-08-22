import { type Component, type JSX, mergeProps } from 'solid-js';
import './index.scss';
interface SKeletonProps {
  class?: string;
  style?: JSX.CSSProperties;
  type?: 'shimmer' | 'flicker';
}
const Skeleton: Component<SKeletonProps> = (props) => {
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
      class={`s-Skeleton  s-Skeleton--${merged.type} ${merged.class}`.replace(/\s{2,}/g, ' ').trim()}
      style={merged.style}
    />
  );
};

export default Skeleton;

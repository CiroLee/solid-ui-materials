import { createSignal } from 'solid-js';
import SourceLink from '@/business/SourceLink';
import SSkeleton from '@/components/SSkeleton';
import CodeDrawer from '@/business/CodeDrawer';
import CodeView from '@/business/CodeView';
import { html as typeStr } from './docs/type.md';
import './skeleton.scss';

export default function SkeletonPage() {
  const tabs = [
    {
      name: 'tsx',
      path: 'components/SSkeleton/index.tsx',
    },
    {
      name: 'scss',
      path: 'components/SSkeleton/index.scss',
    },
  ];
  const [showCodeDrawer, setShowCodeDrawer] = createSignal(false);
  return (
    <>
      <div flex items-center justify-between>
        <h3>SSkeleton</h3>
        <div>
          <span hover:text-blue-600 text-gray cursor-pointer mr-4 onClick={() => setShowCodeDrawer(true)}>
            code
          </span>
          <SourceLink path="SSkeleton" name="source" />
        </div>
      </div>
      <h4>type: shimmer</h4>
      <div class="card-skeleton">
        <SSkeleton type="shimmer" class="card-skeleton__avatar" />
        <div class="card-skeleton__content">
          <SSkeleton type="shimmer" class="card-skeleton__item" />
          <SSkeleton type="shimmer" class="card-skeleton__item" style={{ width: '80%' }} />
        </div>
      </div>
      <h4>type: flicker</h4>
      <div class="card-skeleton">
        <SSkeleton type="flicker" class="card-skeleton__avatar" />
        <div class="card-skeleton__content">
          <SSkeleton type="flicker" class="card-skeleton__item" />
          <SSkeleton type="flicker" class="card-skeleton__item" style={{ width: '80%' }} />
        </div>
      </div>
      <CodeView content={typeStr} />
      <CodeDrawer show={showCodeDrawer()} tabs={tabs} onCancel={() => setShowCodeDrawer(false)} />
    </>
  );
}

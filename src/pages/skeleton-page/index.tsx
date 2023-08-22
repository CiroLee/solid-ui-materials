import { createSignal } from 'solid-js';
import SourceLink from '@/business/SourceLink';
import Skeleton from '@/components/Skeleton';
import CodeDrawer from '@/business/CodeDrawer';
import CodeView from '@/business/CodeView';
import { html as typeStr } from './docs/type.md';

export default function SKeletonPage() {
  const tabs = [
    {
      name: 'index.tsx',
      path: 'components/Skeleton/index.tsx',
    },
    {
      name: 'index.scss',
      path: 'components/Skeleton/index.scss',
    },
  ];
  const [showCodeDrawer, setShowCodeDrawer] = createSignal(false);
  return (
    <>
      <div flex items-center justify-between>
        <h3>Skeleton</h3>
        <div>
          <span hover:text-blue-600 text-gray cursor-pointer mr-4 onClick={() => setShowCodeDrawer(true)}>
            code
          </span>
          <SourceLink path="Skeleton" name="source" />
        </div>
      </div>
      <h4>type: shimmer</h4>
      <div class="w-300px flex">
        <Skeleton type="shimmer" class="w-40px h-40px rounded-1/2" />
        <div class="relative ml-12px flex-1 children:mb-10px">
          <Skeleton type="shimmer" class="h-14px rounded-4px" />
          <Skeleton type="shimmer" class="h-14px rounded-4px" style={{ width: '80%' }} />
        </div>
      </div>
      <h4>type: flicker</h4>
      <div class="w-300px flex">
        <Skeleton type="flicker" class="w-40px h-40px rounded-1/2" />
        <div class="relative ml-12px flex-1 children:mb-10px">
          <Skeleton type="flicker" class="h-14px rounded-4px" />
          <Skeleton type="flicker" class="h-14px rounded-4px" style={{ width: '80%' }} />
        </div>
      </div>
      <CodeView content={typeStr} />
      <CodeDrawer show={showCodeDrawer()} tabs={tabs} onCancel={() => setShowCodeDrawer(false)} />
    </>
  );
}

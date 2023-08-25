import { createSignal } from 'solid-js';
import SourceLink from '@/business/SourceLink';
import Kbd from '@/components/Kbd';
import CodeDrawer from '@/business/CodeDrawer';
import CodeView from '@/business/CodeView';
import { html as usageStr } from './docs/usage.md';

export default function KbdPage() {
  const [showCodeDrawer, setShowCodeDrawer] = createSignal(false);
  const tabs = [
    {
      name: 'index.tsx',
      path: 'components/Kbd/index.tsx',
    },
    {
      name: 'index.scss',
      path: 'components/Kbd/index.scss',
    },
  ];
  return (
    <>
      <div flex items-center justify-between>
        <h3>Kbd</h3>
        <div>
          <span hover:text-blue-600 text-gray cursor-pointer mr-4 onClick={() => setShowCodeDrawer(true)}>
            code
          </span>
          <SourceLink path="Kbd" name="source" />
        </div>
      </div>
      <h4>usage</h4>
      <div class="children:mr-2">
        <Kbd keys={['command']}>K</Kbd>
        <Kbd keys={['command', 'option']}>N</Kbd>
        <Kbd keys={['space']} />
        <Kbd>Space</Kbd>
      </div>
      <CodeView content={usageStr} />
      <CodeDrawer show={showCodeDrawer()} tabs={tabs} onCancel={() => setShowCodeDrawer(false)} />
    </>
  );
}

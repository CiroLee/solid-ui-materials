import { createSignal } from 'solid-js';
import STabs, { type STabItem } from '@/components/STabs';
import SIcon from '@/components/SIcon';
import SourceLink from '@/business/SourceLink';
import CodeDrawer from '@/business/CodeDrawer';
import CodeView from '@/business/CodeView';
import { html as baseStr } from './docs/base.md';
import { html as disabledStr } from './docs/disabled.md';
import { html as customStr } from './docs/custom.md';
export default function TabsPage() {
  const tabs = [
    {
      name: 'index.tsx',
      path: 'components/STabs/index.tsx',
    },
    {
      name: 'index.scss',
      path: 'components/STabs/index.scss',
    },
  ];
  const tabs1: STabItem[] = [
    {
      key: 'windows',
      content: 'windows',
    },
    {
      key: 'apple',
      content: 'apple',
    },
    {
      key: 'linux',
      content: 'linux',
    },
  ];
  const tabs2: STabItem[] = [
    {
      key: 'windows',
      disabled: true,
      content: 'windows',
    },
    {
      key: 'apple',
      content: <div>apple</div>,
    },
    {
      key: 'linux',
      content: <div>linux</div>,
    },
  ];
  const tabs3: STabItem[] = [
    {
      key: 'windows',
      content: (
        <>
          <SIcon name="windows-fill" />
          <span ml-1>window</span>
        </>
      ),
    },
    {
      key: 'apple',
      content: (
        <>
          <SIcon name="apple-fill" />
          <span ml-1>apple</span>
        </>
      ),
    },
    {
      key: 'linux',
      content: (
        <>
          <SIcon name="ubuntu-fill" />
          <span ml-1>linux</span>
        </>
      ),
    },
  ];
  const [showCodeDrawer, setShowCodeDrawer] = createSignal(false);
  return (
    <>
      <div>
        <div flex items-center justify-between>
          <h3>STabs</h3>
          <div>
            <span hover:text-blue-600 text-gray cursor-pointer mr-4 onClick={() => setShowCodeDrawer(true)}>
              code
            </span>
            <SourceLink path="STabs" name="source" />
          </div>
        </div>
      </div>
      <h4>basic</h4>
      <STabs defaultKey="apple" tabs={tabs1} class="w-260px" onChange={(key) => console.log('tab change: ', key)} />
      <CodeView content={baseStr} />
      <h4>disabled</h4>
      <STabs defaultKey="apple" tabs={tabs2} class="w-260px" />
      <CodeView content={disabledStr} />
      <h4>custom item</h4>
      <STabs defaultKey="apple" tabs={tabs3} class="w-300px" />
      <CodeView content={customStr} />
      <CodeDrawer show={showCodeDrawer()} tabs={tabs} onCancel={() => setShowCodeDrawer(false)} />
    </>
  );
}

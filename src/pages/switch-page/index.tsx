import { createSignal } from 'solid-js';
import SourceLink from '@/business/SourceLink';
import SSwitch from '@/components/SSwitch';
import CodeDrawer from '@/business/CodeDrawer';
import CodeView from '@/business/CodeView';
import { html as basicStr } from './docs/basic.md';
import { html as sizeStr } from './docs/size.md';
import { html as disabledStr } from './docs/disabled.md';
export default function SwitchPage() {
  const tabs = [
    {
      name: 'tsx',
      path: 'components/SSwitch/index.tsx',
    },
    {
      name: 'scss',
      path: 'components/SSwitch/index.scss',
    },
  ];
  const [showCodeDrawer, setShowCodeDrawer] = createSignal(false);
  const [on, setOn] = createSignal(false);
  return (
    <>
      <div flex items-center justify-between>
        <h3>SSwitch</h3>
        <div>
          <span hover:text-blue-600 text-gray cursor-pointer mr-4 onClick={() => setShowCodeDrawer(true)}>
            code
          </span>
          <SourceLink path="SSwitch" name="source" />
        </div>
      </div>
      <h4>basic</h4>
      <div>
        <p>switch: {on() ? 'On' : 'Off'} </p>
        <SSwitch checked={on()} onChange={setOn} />
      </div>
      <CodeView content={basicStr} />
      <h4>size</h4>
      <div class="children:(mb-2 flex!)">
        <SSwitch size="small" />
        <SSwitch size="medium" />
        <SSwitch size="large" />
      </div>
      <CodeView content={sizeStr} />
      <h4>disabled</h4>
      <div class="children:(mb-2 flex!)">
        <SSwitch checked disabled />
        <SSwitch disabled />
      </div>
      <CodeView content={disabledStr} />
      <CodeDrawer show={showCodeDrawer()} tabs={tabs} onCancel={() => setShowCodeDrawer(false)} />
    </>
  );
}

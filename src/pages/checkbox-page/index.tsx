import { createSignal } from 'solid-js';
import { SCheckbox, SCheckboxGroup, type SCheckboxGroupOptions } from '@/components/SCheckbox';
import SourceLink from '@/business/SourceLink';
import CodeDrawer from '@/business/CodeDrawer';
import CodeView from '@/business/CodeView';
import { html as baseStr } from './docs/base.md';
import { html as disabledStr } from './docs/disabled.md';
import { html as groupStr } from './docs/group.md';
import { html as customGroup } from './docs/custom-group.md';
import './checkbox-page.scss';

export default function CheckboxPage() {
  const tabs = [
    {
      name: 'checkbox.tsx',
      path: 'components/SCheckbox/checkbox.tsx',
    },
    {
      name: 'group.tsx',
      path: 'components/SCheckbox/group.tsx',
    },
    {
      name: 'index.ts',
      path: 'components/SCheckbox/index.ts',
    },
    {
      name: 'index.scss',
      path: 'components/SCheckbox/index.scss',
    },
  ];
  const checkboxGroup: SCheckboxGroupOptions[] = [
    {
      children: 'apple',
      value: 'apple',
    },
    {
      children: 'bear',
      value: 'bear',
    },
    {
      children: 'banana',
      value: 'banana',
    },
  ];
  const checkboxGroup2: SCheckboxGroupOptions[] = [
    {
      children: (
        <div>
          <div class="title">apple</div>
          <div>🍎</div>
        </div>
      ),
      class: 'checkbox-page-custom',
      value: 'apple',
    },
    {
      children: (
        <div>
          <div class="title">banana</div>
          <div>🍌</div>
        </div>
      ),
      class: 'checkbox-page-custom',
      value: 'banana',
    },
    {
      children: (
        <div>
          <div class="title">orange</div>
          <div class="price">🍊</div>
        </div>
      ),
      class: 'checkbox-page-custom',
      value: 'orange',
    },
    {
      children: (
        <div>
          <div class="title">peach</div>
          <div class="price">🍑</div>
        </div>
      ),
      disabled: true,
      class: 'checkbox-page-custom',
      value: 'peach',
    },
  ];
  const [showCodeDrawer, setShowCodeDrawer] = createSignal(false);
  return (
    <>
      <div flex items-center justify-between>
        <h3>SCheckbox</h3>
        <div>
          <span hover:text-blue-600 text-gray cursor-pointer mr-4 onClick={() => setShowCodeDrawer(true)}>
            code
          </span>
          <SourceLink path="SCheckbox" name="source" />
        </div>
      </div>
      <h4>basic</h4>
      <SCheckbox onChange={(e) => console.log(e)}>checkbox</SCheckbox>
      <CodeView content={baseStr} />
      <h4>disabled</h4>
      <div class="children:mr-12px">
        <SCheckbox disabled>disabled</SCheckbox>
        <SCheckbox disabled checked>
          disabled
        </SCheckbox>
      </div>
      <CodeView content={disabledStr} />
      <h4>checkbox group</h4>
      <SCheckboxGroup value="apple" options={checkboxGroup} onChange={(list) => console.log(list)} />
      <CodeView content={groupStr} />
      <h4>custom children</h4>
      <SCheckboxGroup value="apple" options={checkboxGroup2} onChange={(list) => console.log(list)} />
      <CodeView content={customGroup} />
      <CodeDrawer show={showCodeDrawer()} tabs={tabs} onCancel={() => setShowCodeDrawer(false)} />
    </>
  );
}

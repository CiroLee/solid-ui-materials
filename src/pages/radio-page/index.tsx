import { createSignal } from 'solid-js';
import SRadio, { type SRadioGroupOptions, SRadioGroup } from '@/components/SRadio';
import SourceLink from '@/business/SourceLink';
import CodeDrawer from '@/business/CodeDrawer';
import CodeView from '@/business/CodeView';
import { html as baseStr } from './docs/base.md';
import { html as disabledStr } from './docs/disabled.md';
import { html as groupStr } from './docs/group.md';
import { html as customGroup } from './docs/custom-group.md';
import './radio-page.scss';
export default function RadioPage() {
  const tabs = [
    {
      name: 'index.tsx',
      path: 'components/SRadio/index.tsx',
    },
    {
      name: 'index.scss',
      path: 'components/SRadio/index.scss',
    },
  ];
  const [showCodeDrawer, setShowCodeDrawer] = createSignal(false);
  const [groupValue, setGroupValue] = createSignal('apple');
  const [radioPhone, setRadioPhone] = createSignal('iphone');
  const radioGroup: SRadioGroupOptions[] = [
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
  const radioGroup2: SRadioGroupOptions[] = [
    {
      children: (
        <div>
          <div class="radio-page title">iphone</div>
          <div class="radio-page price">$1.00</div>
        </div>
      ),
      class: 'radio-page-custom',
      value: 'iphone',
    },
    {
      children: (
        <div>
          <div class="radio-page title">huawei</div>
          <div class="radio-page price">$2.00</div>
        </div>
      ),
      class: 'radio-page-custom',
      value: 'huawei',
    },
    {
      children: (
        <div>
          <div class="radio-page title">sansung</div>
          <div class="radio-page price">$3.00</div>
        </div>
      ),
      class: 'radio-page-custom',
      value: 'sansung',
    },
    {
      children: (
        <div>
          <div class="radio-page title">nokia</div>
          <div class="radio-page price">$4.00</div>
        </div>
      ),
      disabled: true,
      class: 'radio-page-custom',
      value: 'nokia',
    },
  ];
  return (
    <>
      <div flex items-center justify-between>
        <h3>SRadio</h3>
        <div>
          <span hover:text-blue-600 text-gray cursor-pointer mr-4 onClick={() => setShowCodeDrawer(true)}>
            code
          </span>
          <SourceLink path="SRadio" name="source" />
        </div>
      </div>
      <h4>basic</h4>
      <SRadio>Radio</SRadio>
      <CodeView content={baseStr} />
      <h4>disabled</h4>
      <div class="children:mr-3">
        <SRadio disabled>disabled</SRadio>
        <SRadio disabled checked>
          disabled
        </SRadio>
        <CodeView content={disabledStr} />
      </div>
      <h4>radio group</h4>
      <SRadioGroup value={groupValue()} options={radioGroup} onChange={setGroupValue} />
      <CodeView content={groupStr} />
      <h4>radio group(custom radio children)</h4>
      <SRadioGroup value={radioPhone()} options={radioGroup2} onChange={setRadioPhone} />
      <CodeView content={customGroup} />
      <CodeDrawer show={showCodeDrawer()} tabs={tabs} onCancel={() => setShowCodeDrawer(false)} />
    </>
  );
}

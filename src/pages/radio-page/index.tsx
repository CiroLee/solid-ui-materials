import { createSignal } from 'solid-js';
import SRadio, { type SRadioGroupOptions, SRadioGroup } from '@/components/SRadio';
import SourceLink from '@/business/SourceLink';
import './radio-page.scss';
export default function RadioPage() {
  const [checked, setChecked] = createSignal('apple');
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
          <div text-16px>iphone</div>
          <div text-red>$1.00</div>
        </div>
      ),
      class: 'radio-page-custom',
      value: 'iphone',
    },
    {
      children: (
        <div>
          <div text-16px>huawei</div>
          <div text-red>$2.00</div>
        </div>
      ),
      class: 'radio-page-custom',
      value: 'huawei',
    },
    {
      children: (
        <div>
          <div text-16px>sansung</div>
          <div text-red>$3.00</div>
        </div>
      ),
      class: 'radio-page-custom',
      value: 'sansung',
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
          <SourceLink path="SSwitch" name="source" />
        </div>
      </div>
      <h4>basic</h4>
      <SRadio>Radio</SRadio>
      <h4>disabled</h4>
      <div class="children:mr-3">
        <SRadio disabled>disabled</SRadio>
        <SRadio disabled checked>
          disabled
        </SRadio>
      </div>
      <h4>radio group</h4>
      <div>
        <SRadioGroup value={groupValue()} options={radioGroup} onChange={setGroupValue} />
      </div>
      <h4>radio group(custom radio children)</h4>
      <div>
        <SRadioGroup value={radioPhone()} options={radioGroup2} onChange={setRadioPhone} />
      </div>
    </>
  );
}

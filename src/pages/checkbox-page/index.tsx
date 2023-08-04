import { createSignal } from 'solid-js';
import { SCheckbox, SCheckboxGroup, type SCheckboxGroupOptions } from '@/components/SCheckbox';
import SourceLink from '@/business/SourceLink';
import './checkbox-page.scss';

export default function CheckboxPage() {
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
          <SourceLink path="SRadio" name="source" />
        </div>
      </div>
      <h4>basic</h4>
      <SCheckbox>checkbox</SCheckbox>
      <h4>disabled</h4>
      <div class="children:mr-12px">
        <SCheckbox disabled>disabled</SCheckbox>
        <SCheckbox disabled checked>
          disabled
        </SCheckbox>
      </div>
      <h4>checkbox group</h4>
      <SCheckboxGroup value="apple" options={checkboxGroup} onChange={(list) => console.log(list)} />
      <h4>custom children</h4>
      <SCheckboxGroup value="apple" options={checkboxGroup2} onChange={(list) => console.log(list)} />
    </>
  );
}

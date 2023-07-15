import { createSignal } from 'solid-js';
import SourceLink from '@/business/SourceLink';
import SIcon from '@/components/SIcon';
import SButton from '@/components/SButton';
import CodeView from '@/business/CodeView';
import CodeDrawer from '@/business/CodeDrawer';
import { html as buttonTypeStr } from './docs/button-type.md';
import { html as buttonSizeStr } from './docs/button-size.md';
import { html as buttonShapeStr } from './docs/button-shape.md';
import { html as buttonBlockStr } from './docs/button-block.md';
import { html as buttonGroupStr } from './docs/button-group.md';
import { html as buttonIconStr } from './docs/button-icon.md';
import './button-page.scss';
export default function SButtonPage() {
  const tabs = [
    {
      name: 'tsx',
      path: 'components/SButton/index.tsx',
    },
    {
      name: 'scss',
      path: 'components/SButton/index.scss',
    },
  ];
  const [showCodeDrawer, setShowCodeDrawer] = createSignal(false);
  return (
    <>
      <div flex items-center justify-between>
        <h3>SButton</h3>
        <div>
          <span hover:text-blue-600 text-gray cursor-pointer mr-4 onClick={() => setShowCodeDrawer(true)}>
            code
          </span>
          <SourceLink path="SButton" name="source" />
        </div>
      </div>
      <h4>button type</h4>
      <div class="children:(mr-2 mb-2)">
        <SButton type="default">default</SButton>
        <SButton type="primary">primary</SButton>
        <SButton type="success">success</SButton>
        <SButton type="warn">warn</SButton>
        <SButton type="danger">danger</SButton>
        <SButton type="text">text</SButton>
        <SButton disabled>primary</SButton>
      </div>
      <CodeView content={buttonTypeStr} />
      <h4>size</h4>
      <div class="flex items-center children:(mr-2 mb-2)">
        <SButton size="small">small</SButton>
        <SButton size="medium">medium</SButton>
        <SButton size="large">large</SButton>
      </div>
      <CodeView content={buttonSizeStr} />
      <h4>shape</h4>
      <div class="flex items-center children:(mr-2 mb-2)">
        <SButton shape="default">default</SButton>
        <SButton shape="round">round</SButton>
        <SButton shape="circle">C</SButton>
      </div>
      <CodeView content={buttonShapeStr} />
      <h4>block</h4>
      <div w-400px p-12px border border-solid border-gray-300 rounded children:mb-2>
        <SButton block>block</SButton>
        <SButton block type="primary">
          block
        </SButton>
        <SButton block shape="round" type="primary">
          block
        </SButton>
      </div>
      <CodeView content={buttonBlockStr} />
      <h4>usage - button group</h4>
      <div class="button-group">
        <SButton type="primary">apple</SButton>
        <SButton type="primary">pear</SButton>
        <SButton type="primary">banana</SButton>
      </div>
      <div class="button-group">
        <SButton type="primary" shape="round">
          apple
        </SButton>
        <SButton type="primary" shape="round">
          pear
        </SButton>
        <SButton type="primary" shape="round">
          banana
        </SButton>
      </div>
      <CodeView content={buttonGroupStr} />
      <h4>usage - button with icon</h4>
      <div class="flex items-center children:(mr-2 mb-2)">
        <SButton type="primary">
          <SIcon name="add-circle-line" size="16px" />
          <span style={{ 'padding-left': '4px' }}>Add</span>
        </SButton>
        <SButton type="primary">
          <span style={{ 'padding-right': '4px' }}>Add</span>
          <SIcon name="add-circle-line" size="16px" />
        </SButton>
        <SButton type="primary" loading class="button-loading">
          <SIcon name="loader-line" size="16px" />
          <span style={{ 'padding-left': '4px' }}>loading</span>
        </SButton>
      </div>
      <CodeView content={buttonIconStr} />
      <CodeDrawer show={showCodeDrawer()} tabs={tabs} onCancel={() => setShowCodeDrawer(false)} />
    </>
  );
}

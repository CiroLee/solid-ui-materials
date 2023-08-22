import { createSignal } from 'solid-js';
import SourceLink from '@/business/SourceLink';
import Icon from '@/components/Icon';
import Button from '@/components/Button';
import CodeView from '@/business/CodeView';
import CodeDrawer from '@/business/CodeDrawer';
import { html as buttonTypeStr } from './docs/button-type.md';
import { html as outlineStr } from './docs/button-outline.md';
import { html as buttonSizeStr } from './docs/button-size.md';
import { html as buttonShapeStr } from './docs/button-shape.md';
import { html as buttonBlockStr } from './docs/button-block.md';
import { html as buttonGroupStr } from './docs/button-group.md';
import { html as buttonIconStr } from './docs/button-icon.md';
import './button-page.scss';
export default function ButtonPage() {
  const tabs = [
    {
      name: 'index.tsx',
      path: 'components/Button/index.tsx',
    },
    {
      name: 'index.scss',
      path: 'components/Button/index.scss',
    },
  ];
  const [showCodeDrawer, setShowCodeDrawer] = createSignal(false);
  return (
    <>
      <div flex items-center justify-between>
        <h3>Button</h3>
        <div>
          <span hover:text-blue-600 text-gray cursor-pointer mr-4 onClick={() => setShowCodeDrawer(true)}>
            code
          </span>
          <SourceLink path="Button" name="source" />
        </div>
      </div>
      <h4>button type</h4>
      <div class="children:(mr-2 mb-2)">
        <Button type="primary">primary</Button>
        <Button type="success">success</Button>
        <Button type="warn">warn</Button>
        <Button type="danger">danger</Button>
        <Button type="text">text</Button>
        <Button disabled>primary</Button>
      </div>
      <CodeView content={buttonTypeStr} />
      <h4>outline</h4>
      <div class="children:(mr-2 mb-2)">
        <Button outline type="primary">
          primary
        </Button>
        <Button outline type="success">
          success
        </Button>
        <Button outline type="warn">
          warn
        </Button>
        <Button outline type="danger">
          danger
        </Button>
      </div>
      <CodeView content={outlineStr} />
      <h4>size</h4>
      <div class="flex items-center children:(mr-2 mb-2)">
        <Button size="tiny">tiny</Button>
        <Button size="small">small</Button>
        <Button size="medium">medium</Button>
        <Button size="large">large</Button>
      </div>
      <CodeView content={buttonSizeStr} />
      <h4>shape</h4>
      <div class="flex items-center children:(mr-2 mb-2)">
        <Button shape="default">default</Button>
        <Button shape="round">round</Button>
        <Button shape="circle">C</Button>
        <Button shape="square">S</Button>
      </div>
      <CodeView content={buttonShapeStr} />
      <h4>block</h4>
      <div w-400px p-12px border border-solid border-gray-300 rounded children:mb-2>
        <Button outline block>
          block
        </Button>
        <Button block type="primary">
          block
        </Button>
        <Button block shape="round" type="primary">
          block
        </Button>
      </div>
      <CodeView content={buttonBlockStr} />
      <h4>usage - button group</h4>
      <div class="button-group">
        <Button type="primary">apple</Button>
        <Button type="primary">pear</Button>
        <Button type="primary">banana</Button>
      </div>
      <div class="button-group">
        <Button type="primary" shape="round">
          apple
        </Button>
        <Button type="primary" shape="round">
          pear
        </Button>
        <Button type="primary" shape="round">
          banana
        </Button>
      </div>
      <CodeView content={buttonGroupStr} />
      <h4>usage - button with icon</h4>
      <div class="flex items-center children:(mr-2 mb-2)">
        <Button type="primary">
          <Icon name="add-circle-line" size="16px" />
          <span style={{ 'padding-left': '4px' }}>Add</span>
        </Button>
        <Button type="primary">
          <span style={{ 'padding-right': '4px' }}>Add</span>
          <Icon name="add-circle-line" size="16px" />
        </Button>
        <Button type="primary" loading class="button-loading">
          <Icon name="loader-line" size="16px" />
          <span style={{ 'padding-left': '4px' }}>loading</span>
        </Button>
      </div>
      <CodeView content={buttonIconStr} />
      <CodeDrawer show={showCodeDrawer()} tabs={tabs} onCancel={() => setShowCodeDrawer(false)} />
    </>
  );
}

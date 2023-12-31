import { createSignal } from 'solid-js';
import Alert from '@/components/Alert';
import Icon from '@/components/Icon';
import Button from '@/components/Button';
import CodeDrawer from '@/business/CodeDrawer';
import CodeView from '@/business/CodeView';
import SourceLink from '@/business/SourceLink';
import { A } from '@solidjs/router';
import { html as baseStr } from './docs/base.md';
import { html as typeStr } from './docs/type.md';
import { html as widthIconStr } from './docs/icon.md';
import { html as actionStr } from './docs/action.md';

export default function AlertPage() {
  const tabs = [
    {
      name: 'index.tsx',
      path: 'components/Alert/index.tsx',
    },
    {
      name: 'index.scss',
      path: 'components/Alert/index.scss',
    },
  ];
  const [showCodeDrawer, setShowCodeDrawer] = createSignal(false);
  return (
    <>
      <div flex items-center justify-between>
        <h3>Alert</h3>
        <div>
          <span hover:text-blue-600 text-gray cursor-pointer mr-4 onClick={() => setShowCodeDrawer(true)}>
            code
          </span>
          <SourceLink path="Alert" name="source" />
        </div>
      </div>
      <p text-sub>
        depend on{' '}
        <A class="text-blue-600" href="/components/icon">
          Icon
        </A>
      </p>
      <h4>basic</h4>
      <Alert type="info" description="information text" />
      <CodeView content={baseStr} />
      <h4>type</h4>
      <div class="children:mb-3">
        <Alert type="info" description="information text" />
        <Alert type="success" description="success text" />
        <Alert type="warn" description="warn text" />
        <Alert type="error" description="error text" />
      </div>
      <CodeView content={typeStr} />
      <h4>with icon</h4>
      <div class="children:mb-3">
        <Alert showIcon type="info" title="notice title" description="information text, describe something you need" />
        <Alert showIcon type="success" title="success title" description="success text,describe something you need" />
        <Alert showIcon type="warn" title="warn title" description="warn text, describe something you need" />
        <Alert showIcon type="error" title="error title" description="error text, describe something you need" />
      </div>
      <CodeView content={widthIconStr} />
      <h4>custom</h4>
      <div class="children:mb-3">
        <Alert
          showIcon
          title="custom action icon"
          description="system info, describe something you need"
          action={<Icon name="close-line" color="gray" />}
        />
        <Alert
          showIcon
          type="success"
          title="custom action button"
          description="success text, describe something you need"
          action={
            <Button type="success" size="tiny" outline>
              Done
            </Button>
          }
        />
        <Alert
          showIcon
          type="error"
          title="custom description"
          description={
            <div>
              custom error description, you have <span style={{ color: 'red', 'font-weight': 'bold' }}>4</span> errors
            </div>
          }
        />
      </div>
      <CodeView content={actionStr} />
      <CodeDrawer show={showCodeDrawer()} tabs={tabs} onCancel={() => setShowCodeDrawer(false)} />
    </>
  );
}

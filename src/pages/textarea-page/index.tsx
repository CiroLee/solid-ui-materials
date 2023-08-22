import { createSignal } from 'solid-js';
import { A } from '@solidjs/router';
import SourceLink from '@/business/SourceLink';
import Textarea from '@/components/Textarea';
import CodeView from '@/business/CodeView';
import CodeDrawer from '@/business/CodeDrawer';
import { html as baseUseStr } from './docs/base-use.md';
import { html as rowsStr } from './docs/rows.md';
import { html as resizeStr } from './docs/resize.md';
import { html as clearStr } from './docs/clear.md';
import { html as countStr } from './docs/count.md';
import { html as statusStr } from './docs/status.md';
export default function TextareaPage() {
  const tabs = [
    {
      name: 'index.tsx',
      path: 'components/Textarea/index.tsx',
    },
    {
      name: 'index.scss',
      path: 'components/Textarea/index.scss',
    },
  ];
  const [text, setText] = createSignal('');
  const [text2, setText2] = createSignal('');
  const [showCodeDrawer, setShowCodeDrawer] = createSignal(false);
  return (
    <>
      <div flex items-center justify-between>
        <h3>Textarea</h3>
        <div>
          <span hover:text-blue-600 text-gray cursor-pointer mr-4 onClick={() => setShowCodeDrawer(true)}>
            code
          </span>
          <SourceLink path="Textarea" name="source" />
        </div>
      </div>
      <p text-sub>
        depend on{' '}
        <A class="text-blue-600" href="/components/icon">
          Icon
        </A>
      </p>
      <h4>basic</h4>
      <Textarea class="w-600px" placeholder="input sth" />
      <CodeView content={baseUseStr} />
      <h4>custom rows</h4>
      <Textarea class="w-600px" placeholder="rows=3" rows={3} />
      <CodeView content={rowsStr} />
      <h4>resize set</h4>
      <div children:mb-3>
        <Textarea class="w-600px" placeholder="resize default(both)" />
        <Textarea class="w-600px" resize="vertical" placeholder="resize vertical" />
        <Textarea class="w-600px" resize="horizontal" placeholder="resize horizontal" />
        <Textarea class="w-600px" resize="none" placeholder="disabled resize" />
      </div>
      <CodeView content={resizeStr} />
      <h4>allow clear</h4>
      <Textarea class="w-600px" clearable value={text()} onChange={setText} />
      <CodeView content={clearStr} />
      <h4>show count</h4>
      <Textarea class="w-600px" showCount value={text2()} onChange={setText2} clearable maxLength={100} />
      <CodeView content={countStr} />
      <h4>status</h4>
      <div children:mb-3>
        <Textarea class="w-600px" placeholder="warn" status="warn" />
        <Textarea class="w-600px" placeholder="error" status="error" />
        <Textarea class="w-600px" placeholder="disabled" disabled />
        <Textarea class="w-600px" placeholder="readonly" readonly value="readonly" />
      </div>
      <CodeView content={statusStr} />
      <CodeDrawer show={showCodeDrawer()} tabs={tabs} onCancel={() => setShowCodeDrawer(false)} />
    </>
  );
}

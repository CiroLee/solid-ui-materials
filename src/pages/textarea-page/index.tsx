import { createSignal } from 'solid-js';
import { A } from '@solidjs/router';
import SourceLink from '@/business/SourceLink';
import STextarea from '@/components/STextarea';
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
      name: 'tsx',
      path: 'components/STextarea/index.tsx',
    },
    {
      name: 'scss',
      path: 'components/STextarea/index.scss',
    },
  ];
  const [text, setText] = createSignal('');
  const [text2, setText2] = createSignal('');
  const [showCodeDrawer, setShowCodeDrawer] = createSignal(false);
  return (
    <>
      <div flex items-center justify-between>
        <h3>SInput</h3>
        <div>
          <span hover:text-blue-600 text-gray cursor-pointer mr-4 onClick={() => setShowCodeDrawer(true)}>
            code
          </span>
          <SourceLink path="STextarea" name="source" />
        </div>
      </div>
      <p text-gray>
        depend on{' '}
        <A
          class="text-blue decoration-none"
          activeClass="text-blue-600"
          inactiveClass="text-blue-600"
          href="/components/icon">
          SIcon
        </A>
      </p>
      <h4>基本使用</h4>
      <STextarea class="w-600px" placeholder="input sth" />
      <CodeView content={baseUseStr} />
      <h4>自定义行数</h4>
      <STextarea class="w-600px" placeholder="rows=3" rows={3} />
      <CodeView content={rowsStr} />
      <h4>拉伸设置</h4>
      <div children:mb-3>
        <STextarea class="w-600px" placeholder="resize default(both)" />
        <STextarea class="w-600px" resize="vertical" placeholder="resize vertical" />
        <STextarea class="w-600px" resize="horizontal" placeholder="resize horizontal" />
        <STextarea class="w-600px" resize="none" placeholder="disabled resize" />
      </div>
      <CodeView content={resizeStr} />
      <h4>可清除</h4>
      <STextarea class="w-600px" clearable value={text()} onChange={setText} />
      <CodeView content={clearStr} />
      <h4>显示计数</h4>
      <STextarea class="w-600px" showCount value={text2()} onChange={setText2} clearable maxLength={100} />
      <CodeView content={countStr} />
      <h4>不同状态</h4>
      <div children:mb-3>
        <STextarea class="w-600px" placeholder="warn" status="warn" />
        <STextarea class="w-600px" placeholder="error" status="error" />
        <STextarea class="w-600px" placeholder="disabled" disabled />
        <STextarea class="w-600px" placeholder="readonly" readonly value="readonly" />
      </div>
      <CodeView content={statusStr} />
      <CodeDrawer show={showCodeDrawer()} tabs={tabs} onCancel={() => setShowCodeDrawer(false)} />
    </>
  );
}

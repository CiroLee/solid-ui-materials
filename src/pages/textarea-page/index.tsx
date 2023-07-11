import { createSignal } from 'solid-js';
import SourceLink from '@/business/SourceLink';
import STextarea from '@/components/STextarea';
export default function TextareaPage() {
  const [text, setText] = createSignal('');
  const [text2, setText2] = createSignal('');
  return (
    <>
      <div flex items-center justify-between>
        <h3>SInput</h3>
        <div>
          <span hover:text-blue-600 text-gray cursor-pointer mr-4>
            code
          </span>
          <SourceLink path="SIcon" name="source" />
        </div>
      </div>
      <h4>基本使用</h4>
      <STextarea placeholder="input sth" />
      <h4>自定义行数</h4>
      <STextarea placeholder="rows=3" rows={3} />
      <h4>拉伸设置</h4>
      <div children:mb-3>
        <STextarea placeholder="resize default(both)" />
        <STextarea resize="vertical" placeholder="resize vertical" />
        <STextarea resize="horizontal" placeholder="resize horizontal" />
        <STextarea resize="none" placeholder="disabled resize" />
      </div>
      <h4>可清除</h4>
      <STextarea clearable value={text()} onChange={setText} />
      <h4>显示计数</h4>
      <STextarea showCount value={text2()} onChange={setText2} clearable maxLength={100} />
      <h4>不同状态</h4>
      <div children:mb-3>
        <STextarea placeholder="warn" status="warn" />
        <STextarea placeholder="error" status="error" />
        <STextarea placeholder="disabled" disabled />
        <STextarea placeholder="readonly" readonly value="readonly" />
      </div>
    </>
  );
}

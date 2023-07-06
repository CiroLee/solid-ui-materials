import { createSignal } from 'solid-js';
import SourceLink from '@/business/SourceLink';
import SButton from '@/components/SButton';
export default function SButtonPage() {
  const [, setShowCodeDrawer] = createSignal(false);
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
      <h4>按钮类型</h4>
      <div class="children:(mr-2 mb-2)">
        <SButton type="default">default</SButton>
        <SButton type="primary">primary</SButton>
        <SButton type="success">success</SButton>
        <SButton type="warn">warn</SButton>
        <SButton type="danger">danger</SButton>
        <SButton type="text">text</SButton>
        <SButton disabled>primary</SButton>
      </div>
      <h4>按钮尺寸</h4>
      <div class="flex items-center children:(mr-2 mb-2)">
        <SButton size="small">small</SButton>
        <SButton size="medium">medium</SButton>
        <SButton size="large">large</SButton>
      </div>
      <h4>按钮形状</h4>
      <div class="flex items-center children:(mr-2 mb-2)">
        <SButton round>round</SButton>
        <SButton circle>C</SButton>
      </div>
      <h4>block按钮</h4>
      <div w-400px p-12px border border-solid border-gray-300 rounded children:mb-2>
        <SButton block>block</SButton>
        <SButton block type="primary">
          block
        </SButton>
        <SButton block round type="primary">
          block
        </SButton>
      </div>
    </>
  );
}

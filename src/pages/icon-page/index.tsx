import { createSignal } from 'solid-js';
import CodeDrawer from '@/business/CodeDrawer';
import SIcon from '@/components/SIcon';
import SourceLink from '@/business/SourceLink';
import CodeView from '@/business/CodeView';
import { html as iconSizeFStr } from './docs/icon-size.md';
import { html as iconColorFStr } from './docs/icon-color.md';
export default function SIconPage() {
  const tabs = [
    {
      name: 'tsx',
      path: 'components/SIcon/index.tsx',
    },
    {
      name: 'scss',
      path: 'components/SIcon/index.scss',
    },
  ];
  const [showCodeDrawer, setShowCodeDrawer] = createSignal(false);
  return (
    <div>
      <div>
        <div flex items-center justify-between>
          <h3>SIcon图标</h3>
          <div>
            <span hover:text-blue-600 text-gray cursor-pointer mr-4 onClick={() => setShowCodeDrawer(true)}>
              code
            </span>
            <SourceLink path="SIcon" name="source" />
          </div>
        </div>
        <span text-sub>SIcon based on</span>
        <a text-14px text-blue-600 ml-1 href="https://github.com/Remix-Design/RemixIcon" target="-blank">
          Remixicon
        </a>
        <h4>图标尺寸</h4>
        <div class="children:mr-2">
          <SIcon name="home-smile-2-line" />
          <SIcon name="home-smile-2-line" size="24px" />
          <SIcon name="home-smile-2-line" size="32px" />
        </div>
        <CodeView html={iconSizeFStr} />
        <h4>图标颜色(支持渐变色)</h4>
        <div class="children:mr-2">
          <SIcon name="home-smile-2-fill" size="32px" color="blue" />
          <SIcon name="home-smile-2-fill" size="32px" color="red" />
          <SIcon name="home-smile-2-fill" size="32px" gradient="linear-gradient(45deg, yellow, green)" />
        </div>
        <CodeView html={iconColorFStr} />
      </div>
      <CodeDrawer show={showCodeDrawer()} tabs={tabs} onCancel={() => setShowCodeDrawer(false)} />
    </div>
  );
}

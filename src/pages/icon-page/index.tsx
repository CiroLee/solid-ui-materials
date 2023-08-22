import { createSignal } from 'solid-js';
import { A } from '@solidjs/router';
import CodeDrawer from '@/business/CodeDrawer';
import Icon from '@/components/Icon';
import SourceLink from '@/business/SourceLink';
import CodeView from '@/business/CodeView';
import { html as iconSizeFStr } from './docs/icon-size.md';
import { html as iconColorFStr } from './docs/icon-color.md';
export default function IconPage() {
  const tabs = [
    {
      name: 'index.tsx',
      path: 'components/Icon/index.tsx',
    },
    {
      name: 'index.scss',
      path: 'components/Icon/index.scss',
    },
  ];
  const [showCodeDrawer, setShowCodeDrawer] = createSignal(false);
  return (
    <>
      <div flex items-center justify-between>
        <h3>Icon</h3>
        <div>
          <span hover:text-blue-600 text-gray cursor-pointer mr-4 onClick={() => setShowCodeDrawer(true)}>
            code
          </span>
          <SourceLink path="Icon" name="source" />
        </div>
      </div>
      <span text-sub>icon based on</span>
      <A class="text-blue-600 ml-1" href="https://github.com/Remix-Design/RemixIcon" target="_blank">
        Remixicon
      </A>
      <h4>size</h4>
      <div class="children:mr-2">
        <Icon name="home-smile-2-line" />
        <Icon name="home-smile-2-line" size="24px" />
        <Icon name="home-smile-2-line" size="32px" />
      </div>
      <CodeView content={iconSizeFStr} />
      <h4>color(support gradient)</h4>
      <div class="children:mr-2">
        <Icon name="home-smile-2-fill" size="32px" color="blue" />
        <Icon name="home-smile-2-fill" size="32px" color="red" />
        <Icon name="home-smile-2-fill" size="32px" gradient="linear-gradient(45deg, yellow, green)" />
      </div>
      <CodeView content={iconColorFStr} />
      <CodeDrawer show={showCodeDrawer()} tabs={tabs} onCancel={() => setShowCodeDrawer(false)} />
    </>
  );
}

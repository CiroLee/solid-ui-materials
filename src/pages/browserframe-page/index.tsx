import { createSignal } from 'solid-js';
import SBrowserFrame from '@/components/SBrowserFrame';
import SourceLink from '@/business/SourceLink';
import CodeView from '@/business/CodeView';
import CodeDrawer from '@/business/CodeDrawer';
import { html as macosStyleStr } from './docs/macos-style.md';
import { html as windowStyleStr } from './docs/windows-style.md';
import { html as titleStr } from './docs/title.md';
import { html as urlStr } from './docs/url.md';
import { html as customChildrenStr } from './docs/custom-children.md';
export default function BrowserFramePage() {
  const tabs = [
    {
      name: 'index.tsx',
      path: 'components/SBrowserFrame/index.tsx',
    },
    {
      name: 'index.scss',
      path: 'components/SBrowserFrame/index.scss',
    },
  ];
  const [showCodeDrawer, setShowCodeDrawer] = createSignal(false);
  return (
    <>
      <div flex items-center justify-between>
        <h3>SBrowserFrame</h3>
        <div>
          <span hover:text-blue-600 text-gray cursor-pointer mr-4 onClick={() => setShowCodeDrawer(true)}>
            code
          </span>
          <SourceLink path="SBrowserFrame" name="source" />
        </div>
      </div>
      <h4>macos style</h4>
      <SBrowserFrame type="macos" />
      <CodeView content={macosStyleStr} />
      <h4>windows style</h4>
      <SBrowserFrame type="windows" />
      <CodeView content={windowStyleStr} />
      <h4>title</h4>
      <SBrowserFrame type="macos" title="macOS" />
      <CodeView content={titleStr} />
      <h4>url</h4>
      <SBrowserFrame type="macos" url="https://www.solidjs.com" />
      <CodeView content={urlStr} />
      <h4>custom children</h4>
      <SBrowserFrame type="macos" title="website">
        <div style={{ padding: '20px' }}>this is custom content</div>
      </SBrowserFrame>
      <CodeView content={customChildrenStr} />
      <CodeDrawer show={showCodeDrawer()} tabs={tabs} onCancel={() => setShowCodeDrawer(false)} />
    </>
  );
}

import { createSignal } from 'solid-js';
import SBrowserFrame from '@/components/SBrowserFrame';
import SourceLink from '@/business/SourceLink';
export default function BrowserFramePage() {
  const [showCodeDrawer, setShowCodeDrawer] = createSignal(false);
  return (
    <>
      <div flex items-center justify-between>
        <h3>SBrowserFrame</h3>
        <div>
          <span hover:text-blue-600 text-gray cursor-pointer mr-4 onClick={() => setShowCodeDrawer(true)}>
            code
          </span>
          <SourceLink path="SButton" name="source" />
        </div>
      </div>
      <h4>macos style</h4>
      <SBrowserFrame type="macos" />
      <h4>windows style</h4>
      <SBrowserFrame type="windows" />
      <h4>title</h4>
      <SBrowserFrame type="macos" title="macOS" />
      <h4>url</h4>
      <SBrowserFrame type="macos" url="https://www.solidjs.com" />
      <h4>custom children</h4>
      <SBrowserFrame type="macos" title="website">
        <div style={{ padding: '20px' }}>this is content custom</div>
      </SBrowserFrame>
    </>
  );
}

import { createSignal } from 'solid-js';
import SPopup, { type Placement } from '@/components/SPopup';
import SSwitch from '@/components/SSwitch';
import SourceLink from '@/business/SourceLink';
import SButton from '@/components/SButton';
import CodeDrawer from '@/business/CodeDrawer';
import CodeView from '@/business/CodeView';
import { html as popupStr } from './docs/popup.md';

import './popup.scss';
export default function PopupPage() {
  const tabs = [
    {
      name: 'index.tsx',
      path: 'components/SPopup/index.tsx',
    },
    {
      name: 'index.scss',
      path: 'components/SPopup/index.scss',
    },
  ];
  const [showCodeDrawer, setShowCodeDrawer] = createSignal(false);
  const [isBlur, setIsBlur] = createSignal(true);
  const [show, setShow] = createSignal(false);
  const [placement, setPlacement] = createSignal<Placement>('left');
  const openPopupBox = (placement: Placement) => {
    setShow(true);
    setPlacement(placement);
  };
  return (
    <>
      <div flex items-center justify-between>
        <h3>SPopup</h3>
        <div>
          <span hover:text-blue-600 text-gray cursor-pointer mr-4 onClick={() => setShowCodeDrawer(true)}>
            code
          </span>
          <SourceLink path="SPopup" name="source" />
        </div>
      </div>
      <p text-sub text-14px>
        The popup component is the basis for other popup-like components for full-screen popups, such as Modal, Drawer,
        etc.
      </p>
      <div flex items-center mb-3>
        <SSwitch checked={isBlur()} onChange={setIsBlur} />
        <span ml-3>isBlur: {isBlur() ? 'true' : 'false'}</span>
      </div>
      <div children:mr-3>
        <SButton type="primary" onClick={() => openPopupBox('left')}>
          left
        </SButton>
        <SButton type="primary" onClick={() => openPopupBox('right')}>
          right
        </SButton>
        <SButton type="primary" onClick={() => openPopupBox('top')}>
          top
        </SButton>
        <SButton type="primary" onClick={() => openPopupBox('bottom')}>
          bottom
        </SButton>
        <SButton type="primary" onClick={() => openPopupBox('center')}>
          center
        </SButton>
      </div>
      <CodeView content={popupStr} />
      <SPopup show={show()} maskClosable placement={placement()} isBlur={isBlur()} onCancel={() => setShow(false)}>
        <div class={`popup-box popup-box--${placement()}`}>popup content</div>
      </SPopup>
      <CodeDrawer show={showCodeDrawer()} tabs={tabs} onCancel={() => setShowCodeDrawer(false)} />
    </>
  );
}

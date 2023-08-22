import { createSignal } from 'solid-js';
import Popup, { type Placement } from '@/components/Popup';
import Switch from '@/components/Switch';
import SourceLink from '@/business/SourceLink';
import Button from '@/components/Button';
import CodeDrawer from '@/business/CodeDrawer';
import CodeView from '@/business/CodeView';
import { html as popupStr } from './docs/popup.md';

import './popup.scss';
export default function PopupPage() {
  const tabs = [
    {
      name: 'index.tsx',
      path: 'components/Popup/index.tsx',
    },
    {
      name: 'index.scss',
      path: 'components/Popup/index.scss',
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
        <h3>Popup</h3>
        <div>
          <span hover:text-blue-600 text-gray cursor-pointer mr-4 onClick={() => setShowCodeDrawer(true)}>
            code
          </span>
          <SourceLink path="Popup" name="source" />
        </div>
      </div>
      <p text-sub text-14px>
        The popup component is the basis for other popup-like components for full-screen popups, such as Modal, Drawer,
        etc.
      </p>
      <div flex items-center mb-3>
        <Switch checked={isBlur()} onChange={setIsBlur} />
        <span ml-3>isBlur: {isBlur() ? 'true' : 'false'}</span>
      </div>
      <div children:mr-3>
        <Button type="primary" onClick={() => openPopupBox('left')}>
          left
        </Button>
        <Button type="primary" onClick={() => openPopupBox('right')}>
          right
        </Button>
        <Button type="primary" onClick={() => openPopupBox('top')}>
          top
        </Button>
        <Button type="primary" onClick={() => openPopupBox('bottom')}>
          bottom
        </Button>
        <Button type="primary" onClick={() => openPopupBox('center')}>
          center
        </Button>
      </div>
      <CodeView content={popupStr} />
      <Popup show={show()} maskClosable placement={placement()} isBlur={isBlur()} onCancel={() => setShow(false)}>
        <div class={`popup-box popup-box--${placement()}`}>popup content</div>
      </Popup>
      <CodeDrawer show={showCodeDrawer()} tabs={tabs} onCancel={() => setShowCodeDrawer(false)} />
    </>
  );
}

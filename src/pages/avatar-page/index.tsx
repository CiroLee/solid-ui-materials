import { createSignal } from 'solid-js';
import SAvatar from '@/components/SAvatar';
import SourceLink from '@/business/SourceLink';
import CodeView from '@/business/CodeView';
import CodeDrawer from '@/business/CodeDrawer';
import { html as sizeStr } from './docs/size.md';
import { html as shapeStr } from './docs/shape.md';
import { html as textStr } from './docs/text.md';
import { html as avatarGroupStr } from './docs/avatar-group.md';
import { html as avatarStatusStr } from './docs/avatar-status.md';
import './avatar-page.scss';
const avatarUrl = 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200';
export default function AvatarPage() {
  const tabs = [
    {
      name: 'index.tsx',
      path: 'components/SAvatar/index.tsx',
    },
    {
      name: 'index.scss',
      path: 'components/SAvatar/index.scss',
    },
  ];
  const [showCodeDrawer, setShowCodeDrawer] = createSignal(false);
  return (
    <>
      <div flex items-center justify-between>
        <h3>SAvatar</h3>
        <div>
          <span hover:text-blue-600 text-gray cursor-pointer mr-4 onClick={() => setShowCodeDrawer(true)}>
            code
          </span>
          <SourceLink path="SAvatar" name="source" />
        </div>
      </div>
      <h4>size</h4>
      <div class="flex items-center children:(mr-3)">
        <SAvatar size="large" />
        <SAvatar size="large" src={avatarUrl} />
        <SAvatar size="medium" src={avatarUrl} />
        <SAvatar size="small" src={avatarUrl} />
        <SAvatar size="tiny" src={avatarUrl} />
      </div>
      <CodeView content={sizeStr} />
      <h4>shape</h4>
      <div class="flex items-center children:(mr-3)">
        <SAvatar shape="circle" src={avatarUrl} />
        <SAvatar shape="square" src={avatarUrl} />
      </div>
      <CodeView content={shapeStr} />
      <h4>text avatar</h4>
      <div class="flex items-center children:(mr-3)">
        <SAvatar size="small" text="A" />
        <SAvatar text="A" />
        <SAvatar size="large" text="A" style={{ color: '#fff', 'background-color': '#FF7817' }} />
        <SAvatar size="large" shape="square" text="A" style={{ color: '#fff', 'background-color': '#42C421' }} />
      </div>
      <CodeView content={textStr} />
      <h4>usage - avatar group</h4>
      <div class="avatar-group">
        <SAvatar src={avatarUrl} />
        <SAvatar src={avatarUrl} />
        <SAvatar src={avatarUrl} />
        <SAvatar text="+3" />
      </div>
      <CodeView content={avatarGroupStr} />
      <h4>usage- online/offline</h4>
      <div class="flex children:mr-3">
        <div class="avatar-status online" style={{ width: '40px', height: '40px' }}>
          <div class="dot dot--online" />
          <SAvatar shape="circle" src={avatarUrl} />
        </div>
        <div class="avatar-status offline" style={{ width: '40px', height: '40px' }}>
          <div class="dot dot--online" />
          <SAvatar shape="circle" src={avatarUrl} />
        </div>
      </div>
      <CodeView content={avatarStatusStr} />
      <CodeDrawer show={showCodeDrawer()} tabs={tabs} onCancel={() => setShowCodeDrawer(false)} />
    </>
  );
}

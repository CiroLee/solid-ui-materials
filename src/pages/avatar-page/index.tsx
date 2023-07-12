import SAvatar from '@/components/SAvatar';
import SourceLink from '@/business/SourceLink';
import './avatar-page.scss';
const avatarUrl = 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200';
export default function AvatarPage() {
  return (
    <>
      <div flex items-center justify-between>
        <h3>SAvatar</h3>
        <div>
          <span hover:text-blue-600 text-gray cursor-pointer mr-4>
            code
          </span>
          <SourceLink path="SButton" name="source" />
        </div>
      </div>
      <h4>不同尺寸</h4>
      <div class="flex items-center children:(mr-3)">
        <SAvatar size="large" />
        <SAvatar size="large" src={avatarUrl} />
        <SAvatar size="medium" src={avatarUrl} />
        <SAvatar size="small" src={avatarUrl} />
        <SAvatar size="tiny" src={avatarUrl} />
      </div>
      <h4>不同形状</h4>
      <div class="flex items-center children:(mr-3)">
        <SAvatar shape="circle" src={avatarUrl} />
        <SAvatar shape="square" src={avatarUrl} />
      </div>
      <h4>文字头像</h4>
      <div class="flex items-center children:(mr-3)">
        <SAvatar size="small" text="A" />
        <SAvatar text="A" />
        <SAvatar size="large" text="A" style={{ color: '#fff', 'background-color': '#FF7817' }} />
        <SAvatar size="large" shape="square" text="A" style={{ color: '#fff', 'background-color': '#42C421' }} />
      </div>
      <h4>应用-头像组</h4>
      <div class="avatar-group">
        <SAvatar src={avatarUrl} />
        <SAvatar src={avatarUrl} />
        <SAvatar src={avatarUrl} />
        <SAvatar text="+3" />
      </div>
      <h4>应用-在线状态</h4>
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
    </>
  );
}

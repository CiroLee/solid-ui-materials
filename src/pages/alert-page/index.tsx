import SAlert from '@/components/SAlert';
import SourceLink from '@/business/SourceLink';
import SIcon from '@/components/SIcon';
import SButton from '@/components/SButton';
import { A } from '@solidjs/router';

export default function AlertPage() {
  return (
    <>
      <div flex items-center justify-between>
        <h3>SAlert</h3>
        <div>
          <span hover:text-blue-600 text-gray cursor-pointer mr-4>
            code
          </span>
          <SourceLink path="SAvatar" name="source" />
        </div>
      </div>
      <p text-sub>
        depend on{' '}
        <A class="text-blue-600" href="/components/icon">
          SIcon
        </A>
      </p>
      <h4>basic</h4>
      <SAlert type="info" description="information text" />
      <h4>type</h4>
      <div class="children:mb-3">
        <SAlert type="info" description="information text" />
        <SAlert type="success" description="success text" />
        <SAlert type="warn" description="warn text" />
        <SAlert type="error" description="error text" />
      </div>
      <h4>with icon</h4>
      <div class="children:mb-3">
        <SAlert showIcon type="info" title="notice title" description="information text, describe something you need" />
        <SAlert showIcon type="success" title="success title" description="success text,describe something you need" />
        <SAlert showIcon type="warn" title="warn title" description="warn text, describe something you need" />
        <SAlert showIcon type="error" title="error title" description="error text, describe something you need" />
      </div>
      <h4>custom action</h4>
      <div class="children:mb-3">
        <SAlert
          showIcon
          title="system info"
          description="system info, describe something you need"
          action={<SIcon name="close-line" color="gray" />}
        />
        <SAlert
          showIcon
          type="success"
          title="success title"
          description="success text, describe something you need"
          action={
            <SButton type="success" size="tiny" outline>
              Done
            </SButton>
          }
        />
      </div>
    </>
  );
}

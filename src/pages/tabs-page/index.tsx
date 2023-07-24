import STabs, { type STabItem } from '@/components/STabs';
import SIcon from '@/components/SIcon';
import SourceLink from '@/business/SourceLink';
export default function TabsPage() {
  const tabs1: STabItem[] = [
    {
      key: 'windows',
      content: 'windows',
    },
    {
      key: 'apple',
      content: 'apple',
    },
    {
      key: 'linux',
      content: 'linux',
    },
  ];
  const tabs2: STabItem[] = [
    {
      key: 'windows',
      disabled: true,
      content: 'windows',
    },
    {
      key: 'apple',
      content: <div>apple</div>,
    },
    {
      key: 'linux',
      content: <div>linux</div>,
    },
  ];
  const tabs3: STabItem[] = [
    {
      key: 'windows',
      content: (
        <>
          <SIcon name="windows-fill" />
          <span ml-1>window</span>
        </>
      ),
    },
    {
      key: 'apple',
      content: (
        <>
          <SIcon name="apple-fill" />
          <span ml-1>apple</span>
        </>
      ),
    },
    {
      key: 'linux',
      content: (
        <>
          <SIcon name="ubuntu-fill" />
          <span ml-1>linux</span>
        </>
      ),
    },
  ];
  return (
    <>
      <div>
        <div flex items-center justify-between>
          <h3>STabs</h3>
          <div>
            <span hover:text-blue-600 text-gray cursor-pointer mr-4>
              code
            </span>
            <SourceLink path="SSwitch" name="source" />
          </div>
        </div>
      </div>
      <h4>basic</h4>
      <div>
        <STabs defaultKey="apple" tabs={tabs1} class="w-260px" onChange={(key) => console.log('tab change: ', key)} />
      </div>
      <h4>disabled</h4>
      <div>
        <STabs defaultKey="apple" tabs={tabs2} class="w-260px" />
      </div>
      <h4>custom item</h4>
      <div>
        <STabs defaultKey="apple" tabs={tabs3} class="w-300px" />
      </div>
    </>
  );
}

import SourceLink from '@/business/SourceLink';
import SSwitch from '@/components/SSwitch';
export default function SwitchPage() {
  return (
    <>
      <div flex items-center justify-between>
        <h3>SSwitch</h3>
        <div>
          <span hover:text-blue-600 text-gray cursor-pointer mr-4>
            code
          </span>
          <SourceLink path="SPopup" name="source" />
        </div>
      </div>
      <h4>basic</h4>
      <SSwitch />
      <h4>size</h4>
      <div class="children:(mb-2 flex!)">
        <SSwitch size="small" />
        <SSwitch size="medium" />
        <SSwitch size="large" />
      </div>
      <h4>disabled</h4>
      <div class="children:(mb-2 flex!)">
        <SSwitch checked disabled />
        <SSwitch disabled />
      </div>
    </>
  );
}

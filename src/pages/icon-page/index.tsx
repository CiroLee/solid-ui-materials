import SIcon from '@/components/SIcon';
import SourceLink from '@/business/SourceLink';
import CodeView from '@/business/CodeView';
import { html as iconSizeFStr } from './icon-size.md';
import { html as iconColorFStr } from './icon-color.md';
export default function SIconPage() {
  return (
    <div>
      <div>
        <h3>SIcon图标</h3>
        SIcon based on
        <a text-14px text-blue ml-1 href="https://github.com/Remix-Design/RemixIcon" target="-blank">
          Remixicon
        </a>
        <h4>图标尺寸</h4>
        <div class="children:mr-2">
          <SIcon name="home-smile-2-line" />
          <SIcon name="home-smile-2-line" size="24px" />
          <SIcon name="home-smile-2-line" size="32px" />
        </div>
        <CodeView html={iconSizeFStr} />
        <h4>图标颜色(支持渐变色)</h4>
        <div class="children:mr-2">
          <SIcon name="home-smile-2-fill" size="32px" color="blue" />
          <SIcon name="home-smile-2-fill" size="32px" color="red" />
          <SIcon name="home-smile-2-fill" size="32px" gradient="linear-gradient(45deg, yellow, green)" />
        </div>
        <CodeView html={iconColorFStr} />
      </div>
      <footer mt-12>
        <SourceLink path="SIcon" />
      </footer>
    </div>
  );
}

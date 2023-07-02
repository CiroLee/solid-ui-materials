import { type Component } from 'solid-js';
import SIcon from '../SIcon';
interface SourceLinkProps {
  path: string;
  name?: string;
}
const SourceLink: Component<SourceLinkProps> = (props) => {
  return (
    <a
      decoration-none
      text-gray
      relative
      hover:text-blue
      href={`https://github.com/CiroLee/solid-ui-materials/tree/main/src/components/${props.path}`}
      target="_blank">
      <span>{props.name || 'Source'}</span>
      <SIcon name="external-link-line" />
    </a>
  );
};

export default SourceLink;

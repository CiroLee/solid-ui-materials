/* eslint-disable solid/no-innerhtml */
import { type Component } from 'solid-js';
import style from './code-view.module.scss';
import 'highlight.js/styles/felipec.css';
interface CodeViewProps {
  html: string;
}
const CodeView: Component<CodeViewProps> = (props) => {
  return <div class={style['code-view']} innerHTML={props.html} />;
};

export default CodeView;

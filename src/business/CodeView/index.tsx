/* eslint-disable solid/no-innerhtml */
import { type Component } from 'solid-js';
import style from './code-view.module.scss';
import 'highlight.js/styles/atom-one-dark.css';
interface CodeViewProps {
  content: string;
}
const CodeView: Component<CodeViewProps> = (props) => {
  return <div class={style['code-view']} innerHTML={props.content} />;
};

export default CodeView;

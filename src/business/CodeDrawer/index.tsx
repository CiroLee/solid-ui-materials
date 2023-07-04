import { type Component, For, createResource, createEffect, createSignal } from 'solid-js';
import Popup from '@/components/Popup';
import SIcon from '@/components/SIcon';
import { copyToClipboard } from '@/utils/utils';
import { fetchCodesFromGithub, type GithubContent } from '@/api/github';
type Tab = { name: string; path: string };
interface CodeDrawerProps {
  show: boolean;
  tabs: Tab[];
  onCancel: () => void;
}
const CodeDrawer: Component<CodeDrawerProps> = (props) => {
  let timer = 0;
  const [activeKey, setActiveKey] = createSignal('');
  const [code, setCode] = createSignal('');
  const [isCopied, setIsCopied] = createSignal(false);
  const fetchCodes = async () => {
    const codes = [];
    for (const item of props.tabs) {
      const r = await fetchCodesFromGithub<GithubContent>(item.path);
      codes.push({ ...item, code: r.content });
    }
    return codes;
  };

  const handleCopy = (text: string) => {
    copyToClipboard(text).then(() => {
      clearTimeout(timer);
      setIsCopied(true);
      timer = window.setTimeout(() => {
        setIsCopied(false);
      }, 500);
    });
  };

  const [codeData] = createResource(fetchCodes);
  createEffect(() => {
    setActiveKey(codeData()?.[0].name || '');
  });
  createEffect(() => {
    setCode(window.atob(codeData()?.find((item) => item.name === activeKey())?.code || ''));
  });

  return (
    <Popup show={props.show} maskClosable placement="right" onCancel={props.onCancel}>
      <div flex flex-col w-440px h-full bg-white p-12px overflow-hidden box-border>
        <div flex>
          <For each={codeData()}>
            {(tab) => (
              <div
                inline-flex
                items-center
                h-44px
                px-16px
                cursor-default
                border-solid
                box-border
                class={`${
                  activeKey() === tab.name ? 'text-black border-0 border-b-2px border-black' : 'text-gray border-0'
                } transition-all hover:(text-black)`}
                onClick={() => setActiveKey(tab.name)}>
                {tab.name}
              </div>
            )}
          </For>
        </div>
        <div flex-1 bg-red mt-3 overflow-auto p-12px rounded-1 relative bg="#2a272b" text-white>
          <div
            absolute
            top-2
            right-2
            text-gray-3
            p-4px
            rounded-1
            cursor-pointer
            transition-all
            class="hover:(bg-gray/40)"
            onClick={() => handleCopy(code())}>
            <SIcon name={isCopied() ? 'check-line' : 'clipboard-line'} size="18px" />
          </div>
          <pre>
            <code>{code()}</code>
          </pre>
        </div>
      </div>
    </Popup>
  );
};

export default CodeDrawer;

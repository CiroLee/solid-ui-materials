import { createSignal } from 'solid-js';
import { A } from '@solidjs/router';
import SInput from '@/components/SInput';
import SIcon from '@/components/SIcon';
import CodeView from '@/business/CodeView';
import CodeDrawer from '@/business/CodeDrawer';
import { html as baseUseStr } from './docs/base-use.md';
import { html as sizeStr } from './docs/size.md';
import { html as preSuffixStr } from './docs/pre-suffix.md';
import { html as statusStr } from './docs/status.md';
import { html as clearStr } from './docs/clear.md';
import { html as countStr } from './docs/count.md';
import { html as passwordStr } from './docs/password.md';
import SourceLink from '@/business/SourceLink';
export default function InputPage() {
  const tabs = [
    {
      name: 'tsx',
      path: 'components/SInput/index.tsx',
    },
    {
      name: 'scss',
      path: 'components/SInput/index.scss',
    },
  ];
  const [inputValue1, setInputValue1] = createSignal('');
  const [inputValue2, setInputValue2] = createSignal('');
  const [inputValue3, setInputValue3] = createSignal('');
  const [showCodeDrawer, setShowCodeDrawer] = createSignal(false);
  return (
    <>
      <div flex items-center justify-between>
        <h3>SInput</h3>
        <div>
          <span hover:text-blue-600 text-gray cursor-pointer mr-4 onClick={() => setShowCodeDrawer(true)}>
            code
          </span>
          <SourceLink path="SIcon" name="source" />
        </div>
      </div>
      <p text-sub>
        depend on{' '}
        <A class="text-blue-600" href="/components/icon">
          SIcon
        </A>
      </p>
      <h4>basic</h4>
      <div w-540px>
        <p>value: {inputValue1()}</p>
        <SInput value={inputValue1()} placeholder="input sth..." onChange={setInputValue1} />
      </div>
      <CodeView content={baseUseStr} />
      <h4>size</h4>
      <div w-540px children:mb-3>
        <SInput size="small" placeholder="small size" />
        <SInput size="medium" placeholder="medium size" />
        <SInput size="large" placeholder="large size" />
      </div>
      <CodeView content={sizeStr} />
      <h4>prefix and suffix</h4>
      <div w-540px children:mb-3>
        <SInput placeholder="prefix icon" prefix={<SIcon name="user-line" color="gray" />} />
        <SInput placeholder="suffix icon" suffix={<SIcon name="search-line" color="gray" />} />
        <SInput
          placeholder="suffix icon"
          prefix={<SIcon name="money-cny-box-line" color="gray" />}
          suffix={<SIcon name="information-line" color="#b9b5b5" title="information" />}
        />
      </div>
      <CodeView content={preSuffixStr} />
      <h4>status</h4>
      <div w-540px children:mb-3>
        <SInput status="warn" placeholder="warn" prefix={<SIcon name="shield-keyhole-line" />} />
        <SInput status="error" placeholder="error" prefix={<SIcon name="shield-keyhole-line" />} />
        <SInput
          disabled
          placeholder="disabled"
          status="error"
          value="disabled"
          prefix={<SIcon name="shield-keyhole-line" color="#BABABA" />}
        />
        <SInput readonly value="readonly" />
      </div>
      <CodeView content={statusStr} />
      <h4>allow clear</h4>
      <div w-540px>
        <SInput clearable placeholder="input sth..." value={inputValue2()} onChange={setInputValue2} />
      </div>
      <CodeView content={clearStr} />
      <h4>show count</h4>
      <div w-540px>
        <SInput
          showCount
          placeholder="input sth..."
          maxLength={20}
          countWidth="40px"
          value={inputValue3()}
          onChange={setInputValue3}
        />
      </div>
      <CodeView content={countStr} />
      <h4>password</h4>
      <div w-540px>
        <SInput type="password" />
      </div>
      <CodeView content={passwordStr} />
      <CodeDrawer show={showCodeDrawer()} tabs={tabs} onCancel={() => setShowCodeDrawer(false)} />
    </>
  );
}

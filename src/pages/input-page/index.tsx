import { createSignal } from 'solid-js';
import SInput from '@/components/SInput';
import SIcon from '@/components/SIcon';
export default function InputPage() {
  const [inputValue1, setInputValue1] = createSignal('');
  const [inputValue2, setInputValue2] = createSignal('');
  const [inputValue3, setInputValue3] = createSignal('');
  return (
    <>
      <div flex items-center justify-between>
        <h3>SInput</h3>
        <div>
          <span hover:text-blue-600 text-gray cursor-pointer mr-4>
            code
          </span>
        </div>
      </div>
      <h4>基本使用</h4>
      <div w-540px>
        <p>{inputValue1()}</p>
        <SInput value={inputValue1()} placeholder="input sth..." onChange={setInputValue1} />
      </div>
      <h4>不同尺寸</h4>
      <div w-540px children:mb-3>
        <SInput size="small" placeholder="small size" />
        <SInput size="medium" placeholder="medium size" />
        <SInput size="large" placeholder="large size" />
      </div>
      <h4>前缀和后缀</h4>
      <div w-540px children:mb-3>
        <SInput placeholder="prefix icon" prefix={<SIcon name="user-line" color="gray" />} />
        <SInput placeholder="suffix icon" suffix={<SIcon name="search-line" color="gray" />} />
        <SInput
          placeholder="suffix icon"
          prefix={<SIcon name="money-cny-box-line" color="gray" />}
          suffix={<SIcon name="information-line" color="#b9b5b5" title="information" />}
        />
      </div>
      <h4>不同状态</h4>
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
        <SInput readonly value="apple" />
      </div>
      <h4>可清除</h4>
      <div w-540px>
        <SInput clearable placeholder="input sth..." value={inputValue2()} onChange={setInputValue2} />
      </div>
      <h4>显示计数</h4>
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
    </>
  );
}

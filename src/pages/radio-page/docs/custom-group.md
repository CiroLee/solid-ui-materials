```ts
import { type Component, createSignal } from 'solid-js';
import SRadio, { type SRadioGroupOptions } from 'your path';
const App: Component = () => {
  const [radioPhone, setRadioPhone] = createSignal('iphone');
  const radioGroup: SRadioGroupOptions[] = [
    {
      children: (
        <div>
          <div class="title">iphone</div>
          <div class="price">$1.00</div>
        </div>
      ),
      class: 'radio-page-custom',
      value: 'iphone',
    },
    {
      children: (
        <div>
          <div class="title">huawei</div>
          <div class="price">$2.00</div>
        </div>
      ),
      class: 'radio-page-custom',
      value: 'huawei',
    },
    {
      children: (
        <div>
          <div class="title">sansung</div>
          <div class="price">$3.00</div>
        </div>
      ),
      class: 'radio-page-custom',
      value: 'sansung',
    },
    {
      children: (
        <div>
          <div class="title">nokia</div>
          <div class="price">$4.00</div>
        </div>
      ),
      disabled: true,
      class: 'radio-page-custom',
      value: 'nokia',
    },
  ];
  return <SRadioGroup value={radioPhone()} options={radioGroup} onChange={setRadioPhone} />;
};

export default App;
```

```scss
// radio-page.scss
.radio-page-custom {
  .s-radio__track {
    align-self: flex-start;
    margin-top: 6px;
  }
  .title {
    font-size: 16px;
  }
  .price {
    color: red;
  }
  &:has(input:disabled) .price {
    color: inherit;
  }
```

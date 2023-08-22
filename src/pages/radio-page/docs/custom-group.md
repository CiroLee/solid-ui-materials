```ts
import { type Component, createSignal } from 'solid-js';
import Radio, { type RadioGroupOptions } from 'your path';
const App: Component = () => {
  const [radioPhone, setRadioPhone] = createSignal('iphone');
  const radioGroup: RadioGroupOptions[] = [
    {
      children: (
        <div>
          <div class="title">apple</div>
          <div>🍎</div>
        </div>
      ),
      class: 'radio-page-custom',
      value: 'apple',
    },
    {
      children: (
        <div>
          <div class="title">banana</div>
          <div>🍌</div>
        </div>
      ),
      class: 'radio-page-custom',
      value: 'banana',
    },
    {
      children: (
        <div>
          <div class="title">orange</div>
          <div class="price">🍊</div>
        </div>
      ),
      class: 'radio-page-custom',
      value: 'orange',
    },
    {
      children: (
        <div>
          <div class="title">peach</div>
          <div class="price">🍑</div>
        </div>
      ),
      disabled: true,
      class: 'radio-page-custom',
      value: 'peach',
    },
  ];
  return <RadioGroup value={radioPhone()} options={radioGroup} onChange={setRadioPhone} />;
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
  &:has(input:disabled) .price {
    color: inherit;
  }
}
```

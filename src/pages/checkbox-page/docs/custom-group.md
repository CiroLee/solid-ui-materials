```ts
import { type Component } from 'solid-js';
import SRadio { type SCheckboxGroupOptions } from 'your path';
const App: Component = () => {
  const checkboxGroup: SCheckboxGroupOptions[] = [
    {
      children: (
        <div>
          <div class="title">apple</div>
          <div>🍎</div>
        </div>
      ),
      class: 'checkbox-page-custom',
      value: 'apple',
    },
    {
      children: (
        <div>
          <div class="title">banana</div>
          <div>🍌</div>
        </div>
      ),
      class: 'checkbox-page-custom',
      value: 'banana',
    },
    {
      children: (
        <div>
          <div class="title">orange</div>
          <div class="price">🍊</div>
        </div>
      ),
      class: 'checkbox-page-custom',
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
      class: 'checkbox-page-custom',
      value: 'peach',
    },
  ];
  return <SCheckboxGroup value="apple" options={checkboxGroup} onChange={(list) => console.log(list)} />;
};

export default App;
```

```scss
// checkbox-page.scss
.checkbox-page-custom {
  .s-checkbox__track {
    align-self: flex-start;
    margin-top: 6px;
  }
  .title {
    font-size: 16px;
  }
}
```

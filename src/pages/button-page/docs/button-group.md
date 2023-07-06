```ts
import { type Component } from 'solid-js';
import SButton from 'your path';
const App: Component = () => {
  return (
    <div>
      <div class="button-group">
        <SButton type="primary">apple</SButton>
        <SButton type="primary">pear</SButton>
        <SButton type="primary">banana</SButton>
      </div>
      <div class="button-group">
        <SButton type="primary" round>
          apple
        </SButton>
        <SButton type="primary" round>
          pear
        </SButton>
        <SButton type="primary" round>
          banana
        </SButton>
      </div>
    </div>
  );
};

export default App;
```

```scss
// style.scss
.button-group button {
  margin-bottom: 12px;
  &:first-child {
    border-right: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  &:last-child {
    border-left: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  &:not(:last-child, :first-child) {
    border-right: 0;
    border-left: 0;
    border-radius: 0;
  }
}
```

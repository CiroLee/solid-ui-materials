```ts
import { type Component } from 'solid-js';
import Button from 'your path';
const App: Component = () => {
  return (
    <div>
      <div class="button-group">
        <Button type="primary">apple</Button>
        <Button type="primary">pear</Button>
        <Button type="primary">banana</Button>
      </div>
      <div class="button-group">
        <Button type="primary" round>
          apple
        </Button>
        <Button type="primary" round>
          pear
        </Button>
        <Button type="primary" round>
          banana
        </Button>
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

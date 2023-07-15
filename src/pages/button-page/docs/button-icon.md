```ts
import { type Component } from 'solid-js';
import SButton from 'your path';
const App: Component = () => {
  return (
    <div>
      <SButton type="primary">
        <SIcon name="add-circle-line" size="16px" />
        <span style={{ 'padding-left': '4px' }}>Add</span>
      </SButton>
      <SButton type="primary">
        <span style={{ 'padding-right': '4px' }}>Add</span>
        <SIcon name="add-circle-line" size="16px" />
      </SButton>
      <SButton type="primary" loading class="button-loading">
        <SIcon name="loader-line" size="16px" />
        <span style={{ 'padding-left': '4px' }}>loading</span>
      </SButton>
    </div>
  );
};

export default App;
```

```scss
// button-icon.scss
.button-loading {
  opacity: 0.6;
  i {
    animation: loading 0.8s linear infinite;
  }
}

@keyframes loading {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
```

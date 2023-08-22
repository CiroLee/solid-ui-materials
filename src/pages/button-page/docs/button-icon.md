```ts
import { type Component } from 'solid-js';
import Button from 'your path';
const App: Component = () => {
  return (
    <div>
      <Button type="primary">
        <Icon name="add-circle-line" size="16px" />
        <span style={{ 'padding-left': '4px' }}>Add</span>
      </Button>
      <Button type="primary">
        <span style={{ 'padding-right': '4px' }}>Add</span>
        <Icon name="add-circle-line" size="16px" />
      </Button>
      <Button type="primary" loading class="button-loading">
        <Icon name="loader-line" size="16px" />
        <span style={{ 'padding-left': '4px' }}>loading</span>
      </Button>
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

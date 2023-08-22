```ts
import { type Component } from 'solid-js';
import Alert from 'your path';
const App: Component = () => {
  return (
    <div>
      <Alert showIcon type="info" title="notice title" description="information text, describe something you need" />
      <Alert showIcon type="success" title="success title" description="success text,describe something you need" />
      <Alert showIcon type="warn" title="warn title" description="warn text, describe something you need" />
      <Alert showIcon type="error" title="error title" description="error text, describe something you need" />
    </div>
  );
};

export default App;
```

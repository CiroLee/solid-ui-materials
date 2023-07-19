```ts
import { type Component } from 'solid-js';
import SAlert from 'your path';
const App: Component = () => {
  return (
    <div>
      <SAlert showIcon type="info" title="notice title" description="information text, describe something you need" />
      <SAlert showIcon type="success" title="success title" description="success text,describe something you need" />
      <SAlert showIcon type="warn" title="warn title" description="warn text, describe something you need" />
      <SAlert showIcon type="error" title="error title" description="error text, describe something you need" />
    </div>
  );
};

export default App;
```

```ts
import { type Component } from 'solid-js';
import Alert from 'your path';
const App: Component = () => {
  return (
    <div>
      <Alert type="info" description="information text" />
      <Alert type="success" description="success text" />
      <Alert type="warn" description="warn text" />
      <Alert type="error" description="error text" />
    </div>
  );
};

export default App;
```

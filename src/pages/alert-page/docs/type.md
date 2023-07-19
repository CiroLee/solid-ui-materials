```ts
import { type Component } from 'solid-js';
import SAlert from 'your path';
const App: Component = () => {
  return (
    <div>
      <SAlert type="info" description="information text" />
      <SAlert type="success" description="success text" />
      <SAlert type="warn" description="warn text" />
      <SAlert type="error" description="error text" />
    </div>
  );
};

export default App;
```

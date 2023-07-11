```ts
import { type Component } from 'solid-js';
import STextarea from 'your path';
const App: Component = () => {
  return (
    <div>
      <STextarea placeholder="warn" status="warn" />
      <STextarea placeholder="error" status="error" />
      <STextarea placeholder="disabled" disabled />
      <STextarea placeholder="readonly" readonly value="readonly" />
    </div>
  );
};

export default App;
```

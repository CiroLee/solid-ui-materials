```ts
import { type Component } from 'solid-js';
import Textarea from 'your path';
const App: Component = () => {
  return (
    <div>
      <Textarea placeholder="warn" status="warn" />
      <Textarea placeholder="error" status="error" />
      <Textarea placeholder="disabled" disabled />
      <Textarea placeholder="readonly" readonly value="readonly" />
    </div>
  );
};

export default App;
```

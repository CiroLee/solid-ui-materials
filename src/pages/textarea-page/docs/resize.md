```ts
import { type Component } from 'solid-js';
import STextarea from 'your path';
const App: Component = () => {
  return (
    <div>
      <STextarea class="w-600px" placeholder="resize default(both)" />
      <STextarea class="w-600px" resize="vertical" placeholder="resize vertical" />
      <STextarea class="w-600px" resize="horizontal" placeholder="resize horizontal" />
      <STextarea class="w-600px" resize="none" placeholder="disabled resize" />
    </div>
  );
};

export default App;
```

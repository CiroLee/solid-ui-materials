```ts
import { type Component } from 'solid-js';
import Textarea from 'your path';
const App: Component = () => {
  return (
    <div>
      <Textarea class="w-600px" placeholder="resize default(both)" />
      <Textarea class="w-600px" resize="vertical" placeholder="resize vertical" />
      <Textarea class="w-600px" resize="horizontal" placeholder="resize horizontal" />
      <Textarea class="w-600px" resize="none" placeholder="disabled resize" />
    </div>
  );
};

export default App;
```

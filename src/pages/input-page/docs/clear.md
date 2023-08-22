```ts
import { type Component, createSignal } from 'solid-js';
import Input from 'your path';
const App: Component = () => {
  const [value, setValue] = createSignal('');
  return (
    <div>
      <Input clearable placeholder="input sth..." value={value()} onChange={setValue} />
    </div>
  );
};

export default App;
```

```ts
import { type Component, createSignal } from 'solid-js';
import SInput from 'your path';
const App: Component = () => {
  const [value, setValue] = createSignal('');
  return (
    <div>
      <SInput clearable placeholder="input sth..." value={value()} onChange={setValue} />
    </div>
  );
};

export default App;
```

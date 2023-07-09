```ts
import { type Component, createSignal } from 'solid-js';
import SInput from 'your path';
const App: Component = () => {
  const [value, setValue] = createSignal('');
  return (
    <div>
      <p>value: {value()}</p>
      <SInput value={value()} placeholder="input sth..." onChange={setValue} />
    </div>
  );
};

export default App;
```

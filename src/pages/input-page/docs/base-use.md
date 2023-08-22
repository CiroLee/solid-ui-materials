```ts
import { type Component, createSignal } from 'solid-js';
import Input from 'your path';
const App: Component = () => {
  const [value, setValue] = createSignal('');
  return (
    <div>
      <p>value: {value()}</p>
      <Input value={value()} placeholder="input sth..." onChange={setValue} />
    </div>
  );
};

export default App;
```

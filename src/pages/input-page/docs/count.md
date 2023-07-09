```ts
import { type Component, createSignal } from 'solid-js';
import SInput from 'your path';
const App: Component = () => {
  const [value, setValue] = createSignal('');
  return (
    <div>
      <SInput
        showCount
        placeholder="input sth..."
        maxLength={20}
        countWidth="40px"
        value={value()}
        onChange={setValue}
      />
    </div>
  );
};

export default App;
```

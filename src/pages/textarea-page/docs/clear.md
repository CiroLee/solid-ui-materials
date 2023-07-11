```ts
import { type Component, createSignal } from 'solid-js';
import STextarea from 'your path';
const App: Component = () => {
  const [text, setText] = createSignal('');
  return (
    <div>
      <STextarea clearable value={text()} onChange={setText} />
    </div>
  );
};

export default App;
```

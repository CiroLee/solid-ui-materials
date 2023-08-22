```ts
import { type Component, createSignal } from 'solid-js';
import Textarea from 'your path';
const App: Component = () => {
  const [text, setText] = createSignal('');
  return (
    <div>
      <Textarea clearable value={text()} onChange={setText} />
    </div>
  );
};

export default App;
```

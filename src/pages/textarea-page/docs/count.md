```ts
import { type Component, createSignal } from 'solid-js';
import Textarea from 'your path';
const App: Component = () => {
  const [text, setText] = createSignal('');
  return (
    <div>
      <Textarea showCount clearable maxLength={100} value={text()} onChange={setText} />
    </div>
  );
};

export default App;
```

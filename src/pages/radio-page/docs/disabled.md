```ts
import { type Component } from 'solid-js';
import Radio from 'your path';
const App: Component = () => {
  return (
    <div>
      <Radio disabled>disabled</Radio>
      <Radio disabled checked>
        disabled
      </Radio>
    </div>
  );
};

export default App;
```

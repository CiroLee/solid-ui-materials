```ts
import { type Component } from 'solid-js';
import SCheckbox from 'your path';
const App: Component = () => {
  return (
    <div>
      <SCheckbox disabled>disabled</SCheckbox>
      <SCheckbox disabled checked>
        disabled
      </SCheckbox>
    </div>
  );
};

export default App;
```

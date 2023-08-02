```ts
import { type Component } from 'solid-js';
import SRadio from 'your path';
const App: Component = () => {
  return (
    <div>
      <SRadio disabled>disabled</SRadio>
      <SRadio disabled checked>
        disabled
      </SRadio>
    </div>
  );
};

export default App;
```

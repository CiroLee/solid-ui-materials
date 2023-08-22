```ts
import { type Component } from 'solid-js';
import { default as SSwitch } from 'your path';
const App: Component = () => {
  return (
    <div>
      <SSwitch checked disabled />
      <SSwitch disabled />
    </div>
  );
};

export default App;
```

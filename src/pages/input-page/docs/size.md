```ts
import { type Component } from 'solid-js';
import SInput from 'your path';
const App: Component = () => {
  return (
    <div>
      <SInput size="small" placeholder="small size" />
      <SInput size="medium" placeholder="medium size" />
      <SInput size="large" placeholder="large size" />
    </div>
  );
};

export default App;
```

```ts
import { type Component } from 'solid-js';
import SButton from 'your path';
const App: Component = () => {
  return (
    <div>
      <SButton outline type="primary">
        primary
      </SButton>
      <SButton outline type="success">
        success
      </SButton>
      <SButton outline type="warn">
        warn
      </SButton>
      <SButton outline type="danger">
        danger
      </SButton>
    </div>
  );
};

export default App;
```

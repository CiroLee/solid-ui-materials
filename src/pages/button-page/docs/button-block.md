```ts
import { type Component } from 'solid-js';
import SButton from 'your path';
const App: Component = () => {
  return (
    <div>
      <SButton block>block</SButton>
      <SButton block type="primary">
        block
      </SButton>
      <SButton block round type="primary">
        block
      </SButton>
    </div>
  );
};

export default App;
```

```ts
import { type Component } from 'solid-js';
import Button from 'your path';
const App: Component = () => {
  return (
    <div>
      <Button outline block>
        block
      </Button>
      <Button block type="primary">
        block
      </Button>
      <Button block round type="primary">
        block
      </Button>
    </div>
  );
};

export default App;
```

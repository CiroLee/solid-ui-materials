```ts
import { type Component } from 'solid-js';
import Button from 'your path';
const App: Component = () => {
  return (
    <div>
      <Button outline type="primary">
        primary
      </Button>
      <Button outline type="success">
        success
      </Button>
      <Button outline type="warn">
        warn
      </Button>
      <Button outline type="danger">
        danger
      </Button>
    </div>
  );
};

export default App;
```

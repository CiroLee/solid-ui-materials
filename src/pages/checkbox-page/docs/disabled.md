```ts
import { type Component } from 'solid-js';
import Checkbox from 'your path';
const App: Component = () => {
  return (
    <div>
      <Checkbox disabled>disabled</Checkbox>
      <Checkbox disabled checked>
        disabled
      </Checkbox>
    </div>
  );
};

export default App;
```

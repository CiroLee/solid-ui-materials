```ts
import { type Component } from 'solid-js';
import SCheckbox from 'your path';
const App: Component = () => {
  return <SCheckbox onChange={(e) => console.log(e)}>checkbox</SCheckbox>;
};

export default App;
```

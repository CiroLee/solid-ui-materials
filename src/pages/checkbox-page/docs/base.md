```ts
import { type Component } from 'solid-js';
import Checkbox from 'your path';
const App: Component = () => {
  return <Checkbox onChange={(e) => console.log(e)}>checkbox</Checkbox>;
};

export default App;
```

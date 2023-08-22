```ts
import { type Component } from 'solid-js';
import Button from 'your path';
const App: Component = () => {
  return (
    <div>
      <Button type="primary">primary</Button>
      <Button type="success">success</Button>
      <Button type="warn">warn</Button>
      <Button type="danger">danger</Button>
      <Button type="text">text</Button>
      <Button disabled>primary</Button>
    </div>
  );
};

export default App;
```

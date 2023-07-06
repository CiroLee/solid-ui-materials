```ts
import { type Component } from 'solid-js';
import SButton from 'your path';
const App: Component = () => {
  return (
    <div>
      <SButton type="default">default</SButton>
      <SButton type="primary">primary</SButton>
      <SButton type="success">success</SButton>
      <SButton type="warn">warn</SButton>
      <SButton type="danger">danger</SButton>
      <SButton type="text">text</SButton>
      <SButton disabled>primary</SButton>
    </div>
  );
};

export default App;
```

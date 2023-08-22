```ts
import { type Component } from 'solid-js';
import Avatar from 'your path';
const App: Component = () => {
  return (
    <div>
      <Avatar shape="circle" src={avatarUrl} />
      <Avatar shape="square" src={avatarUrl} />
    </div>
  );
};

export default App;
```

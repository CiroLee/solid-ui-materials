```ts
import { type Component } from 'solid-js';
import SAvatar from 'your path';
const App: Component = () => {
  return (
    <div>
      <SAvatar shape="circle" src={avatarUrl} />
      <SAvatar shape="square" src={avatarUrl} />
    </div>
  );
};

export default App;
```

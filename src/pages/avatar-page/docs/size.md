```ts
import { type Component } from 'solid-js';
import Avatar from 'your path';
const App: Component = () => {
  return (
    <div>
      <Avatar size="large" />
      <Avatar size="large" src={avatarUrl} />
      <Avatar size="medium" src={avatarUrl} />
      <Avatar size="small" src={avatarUrl} />
      <Avatar size="tiny" src={avatarUrl} />
    </div>
  );
};

export default App;
```

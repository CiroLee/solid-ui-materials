```ts
import { type Component } from 'solid-js';
import SAvatar from 'your path';
const App: Component = () => {
  return (
    <div>
      <SAvatar size="large" />
      <SAvatar size="large" src={avatarUrl} />
      <SAvatar size="medium" src={avatarUrl} />
      <SAvatar size="small" src={avatarUrl} />
      <SAvatar size="tiny" src={avatarUrl} />
    </div>
  );
};

export default App;
```

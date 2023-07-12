```ts
import { type Component } from 'solid-js';
import SAvatar from 'your path';
const App: Component = () => {
  return (
    <div>
      <SAvatar size="small" text="A" />
      <SAvatar text="A" />
      <SAvatar size="large" text="A" style={{ color: '#fff', 'background-color': '#FF7817' }} />
      <SAvatar size="large" shape="square" text="A" style={{ color: '#fff', 'background-color': '#42C421' }} />
    </div>
  );
};

export default App;
```

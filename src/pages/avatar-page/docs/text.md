```ts
import { type Component } from 'solid-js';
import Avatar from 'your path';
const App: Component = () => {
  return (
    <div>
      <Avatar size="small" text="A" />
      <Avatar text="A" />
      <Avatar size="large" text="A" style={{ color: '#fff', 'background-color': '#FF7817' }} />
      <Avatar size="large" shape="square" text="A" style={{ color: '#fff', 'background-color': '#42C421' }} />
    </div>
  );
};

export default App;
```

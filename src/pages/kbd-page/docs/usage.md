```ts
import { type Component } from 'solid-js';
import Kbd from 'your path';
const App: Component = () => {
  return (
    <div class="children:mr-2">
      <Kbd keys={['command']}>K</Kbd>
      <Kbd keys={['command', 'option']}>N</Kbd>
      <Kbd keys={['space']} />
      <Kbd>Space</Kbd>
    </div>
  );
};

export default App;
```

```typescript
// keys
export type KbdKey =
  | 'command'
  | 'shift'
  | 'ctrl'
  | 'option'
  | 'enter'
  | 'delete'
  | 'escape'
  | 'tab'
  | 'capslock'
  | 'up'
  | 'right'
  | 'down'
  | 'left'
  | 'pageup'
  | 'pagedown'
  | 'home'
  | 'end'
  | 'help'
  | 'space';
```

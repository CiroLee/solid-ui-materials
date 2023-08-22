```ts
import { type Component, createSignal } from 'solid-js';
import { default SSWitch } from 'your path';
const App: Component = () => {
  const [on, setOn] = createSignal(false);
  return (
    <div>
      <p>switch: {on() ? 'On' : 'Off'} </p>
      <SSwitch checked={on()} onChange={setOn} />
    </div>
  );
};

export default App;
```

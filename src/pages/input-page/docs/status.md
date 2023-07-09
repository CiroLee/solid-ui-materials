```ts
import { type Component } from 'solid-js';
import SInput from 'your path';
const App: Component = () => {
  return (
    <div>
      <SInput status="warn" placeholder="warn" prefix={<SIcon name="shield-keyhole-line" />} />
      <SInput status="error" placeholder="error" prefix={<SIcon name="shield-keyhole-line" />} />
      <SInput
        disabled
        placeholder="disabled"
        status="error"
        value="disabled"
        prefix={<SIcon name="shield-keyhole-line" color="#BABABA" />}
      />
      <SInput readonly value="readonly" />
    </div>
  );
};

export default App;
```

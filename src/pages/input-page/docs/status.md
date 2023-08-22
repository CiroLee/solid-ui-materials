```ts
import { type Component } from 'solid-js';
import Input from 'your path';
const App: Component = () => {
  return (
    <div>
      <Input status="warn" placeholder="warn" prefix={<Icon name="shield-keyhole-line" />} />
      <Input status="error" placeholder="error" prefix={<Icon name="shield-keyhole-line" />} />
      <Input
        disabled
        placeholder="disabled"
        status="error"
        value="disabled"
        prefix={<Icon name="shield-keyhole-line" color="#BABABA" />}
      />
      <Input readonly value="readonly" />
    </div>
  );
};

export default App;
```

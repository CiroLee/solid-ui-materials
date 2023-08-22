```ts
import { type Component } from 'solid-js';
import Input from 'your path';
const App: Component = () => {
  return (
    <div>
      <Input placeholder="prefix icon" prefix={<Icon name="user-line" color="gray" />} />
      <Input placeholder="suffix icon" suffix={<Icon name="search-line" color="gray" />} />
      <Input
        placeholder="suffix icon"
        prefix={<Icon name="money-cny-box-line" color="gray" />}
        suffix={<Icon name="information-line" color="#b9b5b5" title="information" />}
      />
    </div>
  );
};

export default App;
```

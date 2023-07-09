```ts
import { type Component } from 'solid-js';
import SInput from 'your path';
const App: Component = () => {
  return (
    <div>
      <SInput placeholder="prefix icon" prefix={<SIcon name="user-line" color="gray" />} />
      <SInput placeholder="suffix icon" suffix={<SIcon name="search-line" color="gray" />} />
      <SInput
        placeholder="suffix icon"
        prefix={<SIcon name="money-cny-box-line" color="gray" />}
        suffix={<SIcon name="information-line" color="#b9b5b5" title="information" />}
      />
    </div>
  );
};

export default App;
```

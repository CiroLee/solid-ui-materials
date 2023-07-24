```ts
import { type Component } from 'solid-js';
import STabs from 'your path';
const App: Component = () => {
  const tabs: STabItem[] = [
    {
      key: 'windows',
      disabled: true,
      content: 'windows',
    },
    {
      key: 'apple',
      content: 'apple',
    },
    {
      key: 'linux',
      content: 'linux',
    },
  ];
  return (
    <div>
      <STabs defaultKey="apple" tabs={tabs} style={{ width: '260px' }} />
    </div>
  );
};

export default App;
```

```ts
import { type Component } from 'solid-js';
import STabs from 'your path';
import SIcon from 'your path';
const App: Component = () => {
  const tabs: STabItem[] = [
    {
      key: 'windows',
      content: (
        <>
          <SIcon name="windows-fill" />
          <span ml-1>window</span>
        </>
      ),
    },
    {
      key: 'apple',
      content: (
        <>
          <SIcon name="apple-fill" />
          <span ml-1>apple</span>
        </>
      ),
    },
    {
      key: 'linux',
      content: (
        <>
          <SIcon name="ubuntu-fill" />
          <span ml-1>linux</span>
        </>
      ),
    },
  ];
  return (
    <div>
      <STabs defaultKey="apple" tabs={tabs} style={{ width: '300px' }} />
    </div>
  );
};

export default App;
```

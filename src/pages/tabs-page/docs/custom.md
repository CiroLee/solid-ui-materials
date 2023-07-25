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
          <span style={{ 'margin-left': '8px' }}>window</span>
        </>
      ),
    },
    {
      key: 'apple',
      content: (
        <>
          <SIcon name="apple-fill" />
          <span style={{ 'margin-left': '8px' }}>apple</span>
        </>
      ),
    },
    {
      key: 'linux',
      content: (
        <>
          <SIcon name="ubuntu-fill" />
          <span style={{ 'margin-left': '8px' }}>linux</span>
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

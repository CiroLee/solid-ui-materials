```ts
import { type Component } from 'solid-js';
import Tabs from 'your path';
import Icon from 'your path';
const App: Component = () => {
  const tabs: STabItem[] = [
    {
      key: 'windows',
      content: (
        <>
          <Icon name="windows-fill" />
          <span style={{ 'margin-left': '8px' }}>window</span>
        </>
      ),
    },
    {
      key: 'apple',
      content: (
        <>
          <Icon name="apple-fill" />
          <span style={{ 'margin-left': '8px' }}>apple</span>
        </>
      ),
    },
    {
      key: 'linux',
      content: (
        <>
          <Icon name="ubuntu-fill" />
          <span style={{ 'margin-left': '8px' }}>linux</span>
        </>
      ),
    },
  ];
  return (
    <div>
      <Tabs defaultKey="apple" tabs={tabs} style={{ width: '300px' }} />
    </div>
  );
};

export default App;
```

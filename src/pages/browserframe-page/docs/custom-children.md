```ts
import { type Component } from 'solid-js';
import SBrowserFrame from 'your path';
const App: Component = () => {
  return (
    <div>
      <SBrowserFrame type="macos" title="website">
        <div style={{ padding: '20px' }}>this is custom content</div>
      </SBrowserFrame>
    </div>
  );
};

export default App;
```

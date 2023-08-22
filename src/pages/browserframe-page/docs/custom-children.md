```ts
import { type Component } from 'solid-js';
import BrowserFrame from 'your path';
const App: Component = () => {
  return (
    <div>
      <BrowserFrame type="macos" title="website">
        <div style={{ padding: '20px' }}>this is custom content</div>
      </BrowserFrame>
    </div>
  );
};

export default App;
```

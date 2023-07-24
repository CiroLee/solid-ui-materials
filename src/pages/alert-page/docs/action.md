```ts
import { type Component } from 'solid-js';
import SAlert from 'your path';
import SButton from 'your path';
const App: Component = () => {
  return (
    <div>
      <SAlert
        showIcon
        title="system info"
        description="system info, describe something you need"
        action={<SIcon name="close-line" color="gray" />}
      />
      <SAlert
        showIcon
        type="success"
        title="success title"
        description="success text, describe something you need"
        action={
          <SButton type="success" size="tiny" outline>
            Done
          </SButton>
        }
      />
      <SAlert
        showIcon
        type="error"
        title="Error"
        description={
          <div>
            custom error description, you have <span style={{ color: 'red', 'font-weight': 'bold' }}>4</span> errors
          </div>
        }
      />
    </div>
  );
};

export default App;
```

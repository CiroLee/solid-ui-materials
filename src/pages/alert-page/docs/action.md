```ts
import { type Component } from 'solid-js';
import Alert from 'your path';
import Button from 'your path';
const App: Component = () => {
  return (
    <div>
      <Alert
        showIcon
        title="system info"
        description="system info, describe something you need"
        action={<Icon name="close-line" color="gray" />}
      />
      <Alert
        showIcon
        type="success"
        title="success title"
        description="success text, describe something you need"
        action={
          <Button type="success" size="tiny" outline>
            Done
          </Button>
        }
      />
      <Alert
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

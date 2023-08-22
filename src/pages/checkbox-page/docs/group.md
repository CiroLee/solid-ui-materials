```ts
import { type Component } from 'solid-js';
import Radio { type CheckboxGroupOptions } from 'your path';
const App: Component = () => {
  const checkboxGroup: CheckboxGroupOptions[] = [
    {
      children: 'apple',
      value: 'apple',
    },
    {
      children: 'bear',
      value: 'bear',
    },
    {
      children: 'banana',
      value: 'banana',
    },
  ];
  return <CheckboxGroup value="apple" options={checkboxGroup} onChange={(list) => console.log(list)} />;
};

export default App;
```

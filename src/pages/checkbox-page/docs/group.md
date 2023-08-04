```ts
import { type Component } from 'solid-js';
import SRadio { type SCheckboxGroupOptions } from 'your path';
const App: Component = () => {
  const checkboxGroup: SCheckboxGroupOptions[] = [
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
  return <SCheckboxGroup value="apple" options={checkboxGroup} onChange={(list) => console.log(list)} />;
};

export default App;
```

```ts
import { type Component, createSignal } from 'solid-js';
import Radio, { type RadioGroupOptions } from 'your path';
const App: Component = () => {
  const [groupValue, setGroupValue] = createSignal('apple');
  const radioGroup: RadioGroupOptions[] = [
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
  return <RadioGroup value={groupValue()} options={radioGroup} onChange={setGroupValue} />;
};

export default App;
```

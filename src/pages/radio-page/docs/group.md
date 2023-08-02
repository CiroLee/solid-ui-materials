```ts
import { type Component, createSignal } from 'solid-js';
import SRadio, { type SRadioGroupOptions } from 'your path';
const App: Component = () => {
  const [groupValue, setGroupValue] = createSignal('apple');
  const radioGroup: SRadioGroupOptions[] = [
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
  return <SRadioGroup value={groupValue()} options={radioGroup} onChange={setGroupValue} />;
};

export default App;
```

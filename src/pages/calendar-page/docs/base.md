```ts
import { type Component, createSignal } from 'solid-js';
import Calendar from 'your path';
const App: Component = () => {
  const [date, setDate] = createSignal(new Date());
  return (
    <div>
      <p>date: {date1().toLocaleDateString()}</p>
      <Calendar class="max-w-80%" value={date()} onChange={setDate} />
    </div>
  );
};

export default App;
```

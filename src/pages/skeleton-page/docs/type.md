```ts
import { type Component, createSignal } from 'solid-js';
import Skeleton from 'your path';
const App: Component = () => {
  const [value, setValue] = createSignal('');
  return (
    <div>
      <h4>type: shimmer</h4>
      <div class="w-300px flex">
        <Skeleton type="shimmer" class="w-40px h-40px rounded-1/2" />
        <div class="relative ml-12px flex-1 children:mb-10px">
          <Skeleton type="shimmer" class="h-14px rounded-4px" />
          <Skeleton type="shimmer" class="h-14px rounded-4px" style={{ width: '80%' }} />
        </div>
      </div>
      <h4>type: flicker</h4>
      <div class="w-300px flex">
        <Skeleton type="flicker" class="w-40px h-40px rounded-1/2" />
        <div class="relative ml-12px flex-1 children:mb-10px">
          <Skeleton type="flicker" class="h-14px rounded-4px" />
          <Skeleton type="flicker" class="h-14px rounded-4px" style={{ width: '80%' }} />
        </div>
      </div>
    </div>
  );
};

export default App;
```

```ts
import { type Component, createSignal } from 'solid-js';
import SSkeleton from 'your path';
const App: Component = () => {
  const [value, setValue] = createSignal('');
  return (
    <div>
      <h4>type: shimmer</h4>
      <div class="card-skeleton">
        <SSkeleton type="shimmer" class="card-skeleton__avatar" />
        <div class="card-skeleton__content">
          <SSkeleton type="shimmer" class="card-skeleton__item" />
          <SSkeleton type="shimmer" class="card-skeleton__item" style={{ width: '80%' }} />
        </div>
      </div>
      <h4>type: flicker</h4>
      <div class="card-skeleton">
        <SSkeleton type="flicker" class="card-skeleton__avatar" />
        <div class="card-skeleton__content">
          <SSkeleton type="flicker" class="card-skeleton__item" />
          <SSkeleton type="flicker" class="card-skeleton__item" style={{ width: '80%' }} />
        </div>
      </div>
    </div>
  );
};

export default App;
```

```scss
// skeleton.scss
.card-skeleton {
  width: 300px;
  display: flex;
  &__avatar {
    --size: 40px;

    width: var(--size);
    height: var(--size);
    border-radius: 50%;
  }
  &__content {
    position: relative;
    margin-left: 12px;
    flex: 1;
    & > div {
      margin-bottom: 10px;
    }
  }
  &__item {
    height: 14px;
    border-radius: 4px;
  }
}
```

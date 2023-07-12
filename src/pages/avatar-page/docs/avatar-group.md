```ts
import { type Component } from 'solid-js';
import SAvatar from 'your path';
const App: Component = () => {
  return (
    <div class="avatar-group">
      <SAvatar src={avatarUrl} />
      <SAvatar src={avatarUrl} />
      <SAvatar src={avatarUrl} />
      <SAvatar text="+3" />
    </div>
  );
};

export default App;
```

```scss
// avatar-group.scss
.avatar-group {
  .s-avatar {
    border: 2px solid #fff;
    &:not(:first-child) {
      margin-left: -12px;
    }
  }
}
```

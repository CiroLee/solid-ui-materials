```ts
import { type Component } from 'solid-js';
import Avatar from 'your path';
const App: Component = () => {
  return (
    <div class="avatar-group">
      <Avatar src={avatarUrl} />
      <Avatar src={avatarUrl} />
      <Avatar src={avatarUrl} />
      <Avatar text="+3" />
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

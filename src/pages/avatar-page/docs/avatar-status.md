```ts
import { type Component } from 'solid-js';
import Avatar from 'your path';
const App: Component = () => {
  return (
    <div>
      <div class="avatar-status online" style={{ width: '40px', height: '40px' }}>
        <div class="dot dot--online" />
        <Avatar shape="circle" src={avatarUrl} />
      </div>
      <div class="avatar-status offline" style={{ width: '40px', height: '40px' }}>
        <div class="dot dot--online" />
        <Avatar shape="circle" src={avatarUrl} />
      </div>
    </div>
  );
};

export default App;
```

```scss
// avatar-status.scss
.avatar-status {
  position: relative;
  .dot {
    position: absolute;
    width: 10px;
    height: 10px;
    right: 2px;
    bottom: 0;
    border-radius: 50%;
    z-index: 1;
  }
  &.online .dot {
    background-color: #10c310;
  }
  &.offline {
    img {
      filter: grayscale(100%);
    }
    .dot {
      background-color: #b4b4b4;
    }
  }
}
```

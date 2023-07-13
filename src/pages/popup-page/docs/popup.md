```ts
import { type Component, createSignal } from 'solid-js';
import SButton from 'your path';
import SPopup from 'your path';
const App: Component = () => {
  const [show, setShow] = createSignal(false);
  const [placement, setPlacement] = createSignal<Placement>('left');
  const openPopupBox = (placement: Placement) => {
    setShow(true);
    setPlacement(placement);
  };
  return (
    <div>
      <SButton type="primary" onClick={() => openPopupBox('left')}>
        left
      </SButton>
      <SButton type="primary" onClick={() => openPopupBox('right')}>
        right
      </SButton>
      <SButton type="primary" onClick={() => openPopupBox('top')}>
        top
      </SButton>
      <SButton type="primary" onClick={() => openPopupBox('bottom')}>
        bottom
      </SButton>
      <SButton type="primary" onClick={() => openPopupBox('center')}>
        center
      </SButton>
      <SPopup show={show()} maskClosable placement={placement()} isBlur={true} onCancel={() => setShow(false)}>
        <div class={`popup-box popup-box--${placement()}`}>popup content</div>
      </SPopup>
    </div>
  );
};

export default App;
```

```scss
// popup-box.scss
.popup-box {
  padding: 12px;
  background-color: #fff;
  &--left,
  &--right {
    width: 400px;
    height: 100%;
  }
  &--top,
  &--bottom {
    width: 100%;
    height: 200px;
  }
  &--center {
    width: 400px;
    height: 300px;
    border-radius: 4px;
  }
}
```

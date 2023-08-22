```ts
import { type Component, createSignal } from 'solid-js';
import Button from 'your path';
import Popup from 'your path';
import Switch from 'your path';
const App: Component = () => {
  const [show, setShow] = createSignal(false);
  const [placement, setPlacement] = createSignal<Placement>('left');
  const openPopupBox = (placement: Placement) => {
    setShow(true);
    setPlacement(placement);
  };
  return (
    <>
      <div>
        <Switch checked={isBlur()} onChange={setIsBlur} />
        <span>isBlur: {isBlur() ? 'true' : 'false'}</span>
      </div>
      <div>
        <Button type="primary" onClick={() => openPopupBox('left')}>
          left
        </Button>
        <Button type="primary" onClick={() => openPopupBox('right')}>
          right
        </Button>
        <Button type="primary" onClick={() => openPopupBox('top')}>
          top
        </Button>
        <Button type="primary" onClick={() => openPopupBox('bottom')}>
          bottom
        </Button>
        <Button type="primary" onClick={() => openPopupBox('center')}>
          center
        </Button>
        <Popup show={show()} maskClosable placement={placement()} isBlur={isBlur()} onCancel={() => setShow(false)}>
          <div class={`popup-box popup-box--${placement()}`}>popup content</div>
        </Popup>
      </div>
    </>
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

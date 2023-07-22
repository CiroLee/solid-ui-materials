```ts
import { type Component, createSignal } from 'solid-js';
import SCalendar from 'your path';
import SSwitch from 'your path';
import SIcon from 'your path';
import SButton from 'your path';
interface CustomHeaderProps {
  value: Date;
  onPrevChange: () => void;
  onNextChange: () => void;
}
const CustomCalendarHeader: Component<CustomHeaderProps> = (props) => {
  return (
    <div class="custom-header">
      <SButton outline shape="square" size="tiny" type="primary" onClick={props.onPrevChange}>
        <SIcon name="arrow-left-s-line" size="20px" />
      </SButton>
      <span class="custom-header__date">{props.value.toLocaleDateString()}</span>
      <SButton outline shape="square" size="tiny" type="primary" onClick={props.onNextChange}>
        <SIcon name="arrow-right-s-line" size="20px" />
      </SButton>
    </div>
  );
};

const App: Component = () => {
  const [date, setDate] = createSignal(new Date('2023/7/1'));
  const [startWeekOnSunday, setStartWeekOnSunday] = createSignal(true);
  const dateChangeHandler = (type: 'prev' | 'next') => {
    const newDate = new Date(date2());
    if (type === 'prev') {
      newDate.setMonth(date().getMonth() - 1);
    } else {
      newDate.setMonth(date().getMonth() + 1);
    }
    setDate(newDate);
  };
  return (
    <div>
      <div>
        <SSwitch checked={startWeekOnSunday()} onChange={setStartWeekOnSunday} />
        <span>startWeekOnSunday: {startWeekOnSunday() ? 'true' : 'false'}</span>
      </div>
      <SCalendar
        startWeekOnSunday={startWeekOnSunday()}
        language="en"
        header={
          <CustomCalendarHeader
            onPrevChange={() => dateChangeHandler('prev')}
            onNextChange={() => dateChangeHandler('next')}
            value={date()}
          />
        }
        value={date()}
        onChange={setDate}
      />
    </div>
  );
};

export default App;
```

```scss
// custom-header.scss
.custom-header {
  margin-bottom: 12px;
  display: flex;
  justify-content: flex-end;
  padding-bottom: 12px;
  border-bottom: 1px solid #eaeaea;
  &__date {
    margin: 0 20px;
  }
}
```

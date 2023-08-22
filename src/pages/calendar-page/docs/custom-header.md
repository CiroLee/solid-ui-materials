```ts
import { type Component, createSignal } from 'solid-js';
import Calendar from 'your path';
import Switch from 'your path';
import Icon from 'your path';
import Button from 'your path';
interface CustomHeaderProps {
  value: Date;
  onPrevChange: () => void;
  onNextChange: () => void;
}
const CustomCalendarHeader: Component<CustomHeaderProps> = (props) => {
  return (
    <div class="mb-12px flex justify-end pb-12px border-0 border-b-1px border-solid border-#eaeaea">
      <Button outline shape="square" size="tiny" type="primary" onClick={props.onPrevChange}>
        <Icon name="arrow-left-s-line" size="20px" />
      </Button>
      <span class="mx-20px">{props.value.toLocaleDateString()}</span>
      <Button outline shape="square" size="tiny" type="primary" onClick={props.onNextChange}>
        <Icon name="arrow-right-s-line" size="20px" />
      </Button>
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
        <Switch checked={startWeekOnSunday()} onChange={setStartWeekOnSunday} />
        <span>startWeekOnSunday: {startWeekOnSunday() ? 'true' : 'false'}</span>
      </div>
      <Calendar
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

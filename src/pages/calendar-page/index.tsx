import { type Component, createSignal, Switch } from 'solid-js';
import SSwitch from '@/components/SSwitch';
import SIcon from '@/components/SIcon';
import SButton from '@/components/SButton';
import SCalendar from '@/components/SCalendar';
import SourceLink from '@/business/SourceLink';
import CodeDrawer from '@/business/CodeDrawer';
import CodeView from '@/business/CodeView';
import { html as baseStr } from './docs/base.md';
import { html as customHeaderStr } from './docs/custom-header.md';
import './calendar-page.scss';
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
export default function CalendarPage() {
  const tabs = [
    {
      name: 'index.tsx',
      path: 'components/SCalendar/index.tsx',
    },
    {
      name: 'calendar.ts',
      path: 'components/SCalendar/calendar.ts',
    },
    {
      name: 'index.scss',
      path: 'components/SCalendar/index.scss',
    },
  ];
  const [showCodeDrawer, setShowCodeDrawer] = createSignal(false);
  const [date1, setDate1] = createSignal(new Date());
  const [date2, setDate2] = createSignal<Date>(new Date('2023/7/1'));
  const [startWeekOnSunday, setStartWeekOnSunday] = createSignal(true);
  const dateChangeHandler = (type: 'prev' | 'next') => {
    const newDate = new Date(date2());
    if (type === 'prev') {
      newDate.setMonth(date2().getMonth() - 1);
    } else {
      newDate.setMonth(date2().getMonth() + 1);
    }
    setDate2(newDate);
  };
  return (
    <>
      <div flex items-center justify-between>
        <h3>SCalendar</h3>
        <div>
          <span hover:text-blue-600 text-gray cursor-pointer mr-4 onClick={() => setShowCodeDrawer(true)}>
            code
          </span>
          <SourceLink path="SAlert" name="source" />
        </div>
      </div>
      <h4>basic</h4>
      <p>date: {date1().toLocaleDateString()}</p>
      <SCalendar class="max-w-80%" value={date1()} onChange={setDate1} />
      <CodeView content={baseStr} />
      <h4>custom header</h4>
      <div class="flex items-center mb-4">
        <SSwitch checked={startWeekOnSunday()} onChange={setStartWeekOnSunday} />
        <span ml-3>startWeekOnSunday: {startWeekOnSunday() ? 'true' : 'false'}</span>
      </div>
      <SCalendar
        class="max-w-80%"
        startWeekOnSunday={startWeekOnSunday()}
        language="en"
        header={
          <CustomCalendarHeader
            onPrevChange={() => dateChangeHandler('prev')}
            onNextChange={() => dateChangeHandler('next')}
            value={date2()}
          />
        }
        value={date2()}
        onChange={setDate2}
      />
      <CodeView content={customHeaderStr} />
      <CodeDrawer show={showCodeDrawer()} tabs={tabs} onCancel={() => setShowCodeDrawer(false)} />
    </>
  );
}

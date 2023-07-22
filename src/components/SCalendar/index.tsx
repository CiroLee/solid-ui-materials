import { type Component, type JSX, mergeProps, createMemo, For, createSignal, createEffect, Show } from 'solid-js';
import Calendar from './calendar';
import './index.scss';

interface SCalendarProps {
  value?: Date;
  language?: 'en' | 'zh';
  startWeekOnSunday?: boolean;
  header?: JSX.Element;
  class?: string;
  style?: JSX.CSSProperties;
  onChange?: (value: Date) => void;
}

const weekHeadZh = ['日', '一', '二', '三', '四', '五', '六'];
const weekHeadEn = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const SCalendar: Component<SCalendarProps> = (props) => {
  const merged = mergeProps(
    {
      value: new Date(),
      startWeekOnSunday: true,
      language: 'zh',
      class: '',
      style: {},
    },
    props,
  );
  const [selectedDate, setSelectedDate] = createSignal<Date>(new Date());

  const selectedHandler = (date: Date) => {
    setSelectedDate(date);
    props.onChange?.(date);
  };

  const isActiveDate = (date: Date) => {
    const compareOne = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const selectedOne = new Date(selectedDate().getFullYear(), selectedDate().getMonth(), selectedDate().getDate());
    return compareOne.getTime() === selectedOne.getTime();
  };

  const isCurrentMonth = (date: Date) => {
    return date.getMonth() === merged.value.getMonth() && date.getFullYear() === merged.value.getFullYear();
  };

  const weekHeadRender = createMemo(() => {
    let week = merged.language === 'zh' ? weekHeadZh : weekHeadEn;
    if (!merged.startWeekOnSunday) {
      const weekCopy = [...week];
      const first = weekCopy.shift() as string;
      week = weekCopy.concat(first);
    }
    return week;
  });

  createEffect(() => {
    setSelectedDate(merged.value);
  });

  const calendarRender = createMemo(() => {
    const calendar = new Calendar({
      month: merged.value.getMonth() + 1,
      year: merged.value.getFullYear(),
      startWeekOnSunday: merged.startWeekOnSunday,
    });
    return calendar.generate();
  });

  return (
    <div class={`s-calendar ${merged.class}`.replace(/\s{2,}/g, ' ').trim()}>
      <Show when={merged.header}>{merged.header}</Show>
      <div class="s-calendar__week-bar">
        <For each={weekHeadRender()}>{(week) => <li>{week}</li>}</For>
      </div>
      <div class="s-calendar__body">
        <For each={calendarRender().list}>
          {(date) => (
            <li
              class="s-calendar__body-item"
              classList={{
                'not-current-month': !isCurrentMonth(date),
                active: isActiveDate(date),
              }}
              onClick={() => selectedHandler(date)}>
              <span>{date.getDate()}</span>
            </li>
          )}
        </For>
      </div>
    </div>
  );
};

export default SCalendar;

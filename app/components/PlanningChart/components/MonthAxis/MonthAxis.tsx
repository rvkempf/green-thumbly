import moment from 'moment';
import styles from './MonthAxis.module.css';
import { daysInYear } from '~/utils/utils';

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const MonthAxis: React.FC = () => {
  const monthBlocks = months.map((month) => {
    const monthStartDayOfYear = moment()
      .month(month)
      .startOf('month')
      .dayOfYear();
    const daysInMonth = moment().month(month).daysInMonth();
    return (
      <div
        key={month}
        className={styles.monthBlock}
        style={{
          gridColumn: `${monthStartDayOfYear} / ${monthStartDayOfYear + daysInMonth}`,
        }}
      >
        {month}
      </div>
    );
  });
  return (
    <div
      className={styles.axis}
      style={{ gridTemplateColumns: `repeat(${daysInYear()}, 1fr)` }}
    >
      {monthBlocks}
    </div>
  );
};

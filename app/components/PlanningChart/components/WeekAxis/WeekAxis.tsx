import { daysInYear } from '~/utils/utils';
import styles from './WeekAxis.module.css';
import moment from 'moment';

export const WeekAxis: React.FC = () => {
  const firstWeekBlock = (
    <div
      key={`firstweek`}
      className={styles.weekBlock}
      style={{
        gridColumn: `1 / ${moment().startOf('year').week(1).endOf('week').dayOfYear() + 1}`,
      }}
    />
  );

  const weekBlocks = [firstWeekBlock];

  for (let i = 2; i < 53; i++) {
    const startDay = moment()
      .startOf('year')
      .week(i)
      .startOf('week')
      .dayOfYear();
    const endDay =
      moment().startOf('year').week(i).endOf('week').dayOfYear() + 1;
    weekBlocks.push(
      <div
        key={`week${i}`}
        className={styles.weekBlock}
        style={{ gridColumn: `${startDay} / ${endDay}` }}
      >
        {moment().startOf('year').week(i).startOf('week').date()}
      </div>,
    );
  }

  if (
    moment().startOf('year').week(53).startOf('week').dayOfYear() < daysInYear()
  ) {
    const startDay = moment()
      .startOf('year')
      .week(53)
      .startOf('week')
      .dayOfYear();
    const endDay = daysInYear() + 1;
    weekBlocks.push(
      <div
        key={`finalweek`}
        className={styles.weekBlock}
        style={{ gridColumn: `${startDay} / ${endDay}` }}
      />,
    );
  }

  return (
    <div
      className={styles.axis}
      style={{ gridTemplateColumns: `repeat(${daysInYear()}, 1fr)` }}
    >
      {weekBlocks}
    </div>
  );
};

import { daysInYear } from '~/utils/utils';
import styles from './WeekAxis.module.css';
import moment from 'moment';

export const WeekAxis: React.FC = () => {
  const firstWeekBlock = (
    <div
      className={styles.weekBlock}
      style={{ gridColumn: `1 / ${moment().week(1).dayOfYear() + 1}` }}
    />
  );

  const weekBlocks = [firstWeekBlock];

  for (let i = 2; i < 53; i++) {
    const startDay =
      moment()
        .week(i - 1)
        .dayOfYear() + 1;
    const endDay = moment().week(i).dayOfYear() + 1;
    weekBlocks.push(
      <div
        key={`week${i}`}
        className={styles.weekBlock}
        style={{ gridColumn: `${startDay} / ${endDay}` }}
      >
        {moment().week(i).startOf('week').date()}
      </div>,
    );
  }

  if (moment().week(52).dayOfYear() < daysInYear()) {
    const startDay = moment().week(52).dayOfYear() + 1;
    const endDay = daysInYear() + 1;
    weekBlocks.push(
      <div
        key={`week52`}
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

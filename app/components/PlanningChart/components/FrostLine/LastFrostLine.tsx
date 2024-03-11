import { daysInYear } from '~/utils/utils';
import styles from './LastFrostLine.module.css';

interface FrostLineProps {
  frostDay: number;
  firstOrLast: 'first' | 'last';
  numRows: number;
}

export const FrostLine: React.FC<FrostLineProps> = ({
  frostDay,
  firstOrLast,
  numRows,
}) => (
  <div
    className={styles.frostLineContainer}
    style={{
      gridTemplateColumns: `repeat(${daysInYear()}, 1fr)`,
      gridRow: `3 / ${numRows + 1}`,
    }}
  >
    <div
      className={styles.frostLine}
      style={{
        gridColumn: `${frostDay} / ${frostDay + 1}`,
        backgroundColor: firstOrLast === 'first' ? 'blue' : 'red',
      }}
    />
  </div>
);

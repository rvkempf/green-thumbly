import styles from './IndoorStartRange.module.css';

interface IndoorStartRangeProps {
  startDay: number;
  endDay: number;
}

export const IndoorStartRange: React.FC<IndoorStartRangeProps> = ({
  startDay,
  endDay,
}) => {
  return (
    <div
      className={styles.indoorStartRange}
      style={{ gridColumn: `${startDay} / ${endDay + 1}` }}
    />
  );
};

import styles from './HarvestRange.module.css';

interface HarvestRangeProps {
  startDay: number;
  endDay: number;
}

export const HarvestRange: React.FC<HarvestRangeProps> = ({
  startDay,
  endDay,
}) => {
  return (
    <div
      className={styles.harvestRange}
      style={{ gridColumn: `${startDay} / ${endDay + 1}` }}
    />
  );
};

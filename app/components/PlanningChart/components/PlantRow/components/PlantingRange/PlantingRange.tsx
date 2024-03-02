import styles from './PlantingRange.module.css';

interface PlantingRangeProps {
  startDay: number;
  endDay: number;
}

export const PlantingRange: React.FC<PlantingRangeProps> = ({
  startDay,
  endDay,
}) => {
  return (
    <div
      className={styles.plantingRange}
      style={{ gridColumn: `${startDay} / ${endDay}` }}
    />
  );
};

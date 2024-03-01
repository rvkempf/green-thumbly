import { PlantData } from '~/types/plantData';
import styles from './PlantRow.module.css';
import { daysInYear } from '~/utils/utils';

interface PlantRowProps {
  plant: PlantData;
  row: number;
}

const numDays = daysInYear(new Date());

export const PlantRow: React.FC<PlantRowProps> = ({ plant, row }) => {
  const gridRow = `${row} / ${row + 1}`;
  return (
    <>
      <label
        className={styles.plantLabel}
        style={{ gridColumn: '1 / 2', gridRow }}
      >
        {plant.name}
      </label>
      <div
        className={styles.rowTimeline}
        style={{
          gridColumn: '2 / 3',
          gridRow,
          gridTemplateColumns: `repeat(${numDays}, 1fr)`,
        }}
      ></div>
    </>
  );
};

import { PlantData } from '~/types/plantData';
import styles from './PlantRow.module.css';
import { daysInYear } from '~/utils/utils';
import { IndoorStartRange } from './components/IndoorStartRange/IndoorStartRange';
import { PlantingRange } from './components/PlantingRange/PlantingRange';
import { HarvestRange } from './components/HarvestRange/HarvestRange';

interface PlantRowProps {
  lastFrostDay: number;
  firstFrostDay: number;
  plant: PlantData;
  row: number;
}

export const PlantRow: React.FC<PlantRowProps> = ({
  lastFrostDay,
  firstFrostDay,
  plant,
  row,
}) => {
  const numCols = daysInYear();
  const gridRow = `${row} / ${row + 1}`;
  const seedStartDay = plant.indoorStart
    ? lastFrostDay + plant.indoorStart
    : lastFrostDay + plant.firstPlanting;
  const dayBlocks = [...Array(numCols)].map((_, i) => (
    <div
      key={i}
      className={styles.dayBlock}
      style={{ gridColumn: `${i + 1} / ${i + 2}` }}
    />
  ));
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
          gridTemplateColumns: `repeat(${numCols}, 1fr)`,
        }}
      >
        {dayBlocks}
        {plant.indoorStart && (
          <IndoorStartRange
            startDay={lastFrostDay + plant.indoorStart}
            endDay={lastFrostDay + plant.firstPlanting}
          />
        )}
        <PlantingRange
          startDay={lastFrostDay + plant.firstPlanting}
          endDay={lastFrostDay + plant.lastPlanting}
        />
        <HarvestRange
          startDay={seedStartDay + plant.firstHarvest}
          endDay={
            plant.lastHarvest
              ? lastFrostDay + plant.lastPlanting + plant.lastHarvest
              : firstFrostDay
          }
        />
      </div>
    </>
  );
};

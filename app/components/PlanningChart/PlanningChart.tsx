import { PlantCollection } from '~/types/plantData';
import styles from './PlanningChart.module.css';
import { PlantRow } from './components/PlantRow/PlantRow';
import { MonthAxis } from './components/MonthAxis/MonthAxis';
import { WeekAxis } from './components/WeekAxis/WeekAxis';
import { FrostLine } from './components/LastFrostLine/LastFrostLine';

const lastFrostDay = 80;
const firstFrostDay = 315;

interface PlanningChartProps {
  plants: PlantCollection;
}

export const PlanningChart: React.FC<PlanningChartProps> = ({ plants }) => {
  const rows = plants.map((plant, i) => (
    <PlantRow
      key={plant.name}
      lastFrostDay={lastFrostDay}
      firstFrostDay={firstFrostDay}
      plant={plant}
      row={i + 3}
    />
  ));
  const numRows = rows.length + 2;
  return (
    <div
      className={styles.chart}
      style={{ gridTemplateRows: `repeat(${numRows}, 1fr)` }}
    >
      <MonthAxis />
      <WeekAxis />
      {rows}
      <FrostLine frostDay={lastFrostDay} firstOrLast="last" numRows={numRows} />
      <FrostLine
        frostDay={firstFrostDay}
        firstOrLast="first"
        numRows={numRows}
      />
    </div>
  );
};

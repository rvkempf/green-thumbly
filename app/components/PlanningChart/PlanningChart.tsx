import { PlantCollection } from '~/types/plantData';
import styles from './PlanningChart.module.css';
import { PlantRow } from './components/PlantRow/PlantRow';
import { MonthAxis } from './components/MonthAxis/MonthAxis';
import { WeekAxis } from './components/WeekAxis/WeekAxis';

interface PlanningChartProps {
  plants: PlantCollection;
}

export const PlanningChart: React.FC<PlanningChartProps> = ({ plants }) => {
  const rows = plants.map((plant, i) => (
    <PlantRow
      key={plant.name}
      lastFrostDay={80}
      firstFrostDay={315}
      plant={plant}
      row={i + 3}
    />
  ));
  return (
    <div
      className={styles.chart}
      style={{ gridTemplateRows: `repeat(${rows.length + 2}, 1fr)` }}
    >
      <MonthAxis />
      <WeekAxis />
      {rows}
    </div>
  );
};

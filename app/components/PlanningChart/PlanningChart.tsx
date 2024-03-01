import { PlantCollection } from '~/types/plantData';
import styles from './PlanningChart.module.css';
import { PlantRow } from './components/PlantRow/PlantRow';

interface PlanningChartProps {
  plants: PlantCollection;
}

export const PlanningChart: React.FC<PlanningChartProps> = ({ plants }) => {
  const rows = plants.map((plant, i) => (
    <PlantRow key={plant.name} plant={plant} row={i + 1} />
  ));
  return (
    <div
      className={styles.chartContainer}
      style={{ gridTemplateRows: `repeat(${rows.length}, 1fr)` }}
    >
      {rows}
    </div>
  );
};

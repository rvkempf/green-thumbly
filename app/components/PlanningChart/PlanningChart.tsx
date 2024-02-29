import { PlantCollection } from '~/types/plantData';
import styles from './PlanningChart.module.css';
import { PlantRow } from './components/PlantRow/PlantRow';

interface PlanningChartProps {
  plants: PlantCollection;
}

export const PlanningChart: React.FC<PlanningChartProps> = ({ plants }) => {
  const rows = plants.map((plant) => (
    <PlantRow key={plant.name} plant={plant} />
  ));
  return <div className={styles.chartContainer}>{rows}</div>;
};

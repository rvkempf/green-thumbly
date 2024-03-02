import { PlanningChart } from '~/components/PlanningChart/PlanningChart';
import plantData from '~/data/planting_data.json';
import styles from './styles.module.css';

const testPlants = Object.entries(plantData).map(([_, data]) => data);

export default function GardenPlanner() {
  return (
    <div className={styles.chartContainer}>
      <PlanningChart plants={testPlants} />
    </div>
  );
}

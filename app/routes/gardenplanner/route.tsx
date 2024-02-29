import { PlanningChart } from '~/components/PlanningChart/PlanningChart';
import plantData from '~/data/planting_data.json';

const testPlants = Object.entries(plantData).map(([_, data]) => data);

export default function GardenPlanner() {
  return <PlanningChart plants={testPlants} />;
}

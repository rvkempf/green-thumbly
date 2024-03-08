import { PlanningChart } from '~/components/PlanningChart/PlanningChart';
import plantData from '~/data/planting_data.json';
import styles from './styles.module.css';
import { LoaderFunctionArgs, json } from '@remix-run/node';
import { plants } from '~/cookies/plants';
import { useLoaderData } from '@remix-run/react';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const cookieHeader = request.headers.get('Cookie');
  const cookie: { plants?: string[] } =
    (await plants.parse(cookieHeader)) || {};
  return json({ plants: cookie.plants || [] });
};

export default function GardenPlanner() {
  const selectedPlants = useLoaderData<typeof loader>().plants;
  const filteredPlants = Object.entries(plantData)
    .filter(([_, { name }]) => selectedPlants.includes(name))
    .map(([_, data]) => data);
  return (
    <div className={styles.chartContainer}>
      <PlanningChart plants={filteredPlants} />
    </div>
  );
}

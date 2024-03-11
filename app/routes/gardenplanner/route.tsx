import { PlanningChart } from '~/components/PlanningChart/PlanningChart';
import plantData from '~/data/planting_data.json';
import styles from './styles.module.css';
import { LoaderFunctionArgs, json } from '@remix-run/node';
import { plants } from '~/cookies/plants';
import { useLoaderData } from '@remix-run/react';
import { userInfo } from '~/cookies/userInfo';
import moment from 'moment';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const cookieHeader = request.headers.get('Cookie');
  const plantsCookie = (await plants.parse(cookieHeader)) || {};
  const userInfoCookie = (await userInfo.parse(cookieHeader)) || {};

  const frostDates = await fetch(
    `http://127.0.0.1:8080/zipcode?zip=${userInfoCookie.zipcode}`,
  );
  const { last_t32_fp50_date, first_t32_fp50_date } = await frostDates.json();
  const lastFrostDay = moment()
    .month(last_t32_fp50_date.month)
    .date(last_t32_fp50_date.day)
    .dayOfYear();
  const firstFrostDay = moment()
    .month(first_t32_fp50_date.month)
    .date(first_t32_fp50_date.day)
    .dayOfYear();

  return json({
    plants: plantsCookie.plants || [],
    lastFrostDay,
    firstFrostDay,
  });
};

export default function GardenPlanner() {
  const {
    plants: selectedPlants,
    lastFrostDay,
    firstFrostDay,
  } = useLoaderData<typeof loader>();

  const filteredPlants = Object.entries(plantData)
    .filter(([_, { name }]) => selectedPlants.includes(name))
    .map(([_, data]) => data);

  return (
    <div className={styles.container}>
      <h1>{moment().year()} Gardening Schedule</h1>
      <PlanningChart
        plants={filteredPlants}
        lastFrostDay={lastFrostDay}
        firstFrostDay={firstFrostDay}
      />
    </div>
  );
}

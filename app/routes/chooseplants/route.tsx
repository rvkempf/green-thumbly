import { Form, redirect, useLoaderData } from '@remix-run/react';
import plantData from '~/data/planting_data.json';
import styles from './styles.module.css';

// Use mock data for now
export const loader = () => {
  return plantData;
};

export const action = async () => {
  return redirect('/gardenplanner');
};

export default function ChoosePlants() {
  const plantData = useLoaderData<typeof loader>();
  return (
    <div className={styles.container}>
      <h1>What are you growing?</h1>

      <Form method="post">
        {Object.entries(plantData).map(([key, { name }]) => (
          <div key={key}>
            <input type="checkbox" name={name} id={key} />
            <label htmlFor={name}>{name}</label>
          </div>
        ))}
        <button type="submit">Let&apos;s grow!</button>
      </Form>
    </div>
  );
}

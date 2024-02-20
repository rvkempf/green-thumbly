import { Form, redirect, useLoaderData } from '@remix-run/react';
import plantData from '~/data/planting_data.json';

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
    <div>
      <h1>What are you growing?</h1>

      <Form method="post">
        {Object.keys(plantData).map((plant) => (
          <div key={plant}>
            <input type="checkbox" name={plant} id={plant} />
            <label htmlFor={plant}>{plant}</label>
          </div>
        ))}
        <button type="submit">Let&apos;s grow!</button>
      </Form>
    </div>
  );
}

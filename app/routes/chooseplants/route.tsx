import { Form, redirect, useLoaderData } from '@remix-run/react';
import plantData from '~/data/planting_data.json';
import styles from './styles.module.css';
import { useState } from 'react';
import { plants } from '~/cookies/plants';
import { LoaderFunctionArgs, ActionFunctionArgs, json } from '@remix-run/node';

// Use mock data for now
export const loader = async ({ request }: LoaderFunctionArgs) => {
  const cookieHeader = request.headers.get('Cookie');
  const cookie: { plants?: string[] } =
    (await plants.parse(cookieHeader)) || {};
  return json({ plants: cookie.plants || [] });
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const cookieHeader = request.headers.get('Cookie');
  const cookie = (await plants.parse(cookieHeader)) || {};
  const formData: FormData = await request.formData();

  const formPlants = formData.getAll('plant');
  cookie.plants = formPlants;
  return redirect('/gardenplanner', {
    headers: {
      'Set-Cookie': await plants.serialize(cookie),
    },
  });
};

export default function ChoosePlants() {
  const initialPlants = useLoaderData<typeof loader>().plants;
  const [selectedPlants, setSelectedPlants] = useState<string[]>(initialPlants);
  return (
    <div className={styles.container}>
      <h1>What are you growing?</h1>

      <Form method="post">
        <div className={styles.formContainer}>
          <div>
            {Object.entries(plantData).map(([key, { name }]) => (
              <div key={key}>
                <input
                  type="checkbox"
                  id={key}
                  name="plant"
                  value={name}
                  checked={selectedPlants.includes(name)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedPlants([...selectedPlants, name]);
                    } else {
                      setSelectedPlants(
                        selectedPlants.filter((p) => p !== name),
                      );
                    }
                  }}
                />
                <label htmlFor={name}>{name}</label>
              </div>
            ))}
          </div>

          <div>
            <h2>I&apos;m growing:</h2>
            <ul>
              {selectedPlants.length ? (
                selectedPlants
                  .sort()
                  .map((plant) => <li key={plant}>{plant}</li>)
              ) : (
                <span style={{ fontStyle: 'italic' }}>Select your plants</span>
              )}
            </ul>
          </div>
        </div>

        <button type="submit">Let&apos;s grow!</button>
      </Form>
    </div>
  );
}

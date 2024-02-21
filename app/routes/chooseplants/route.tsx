import { Form, redirect, useLoaderData } from '@remix-run/react';
import plantData from '~/data/planting_data.json';
import styles from './styles.module.css';
import { useState } from 'react';

// Use mock data for now
export const loader = () => {
  return plantData;
};

export const action = async () => {
  return redirect('/gardenplanner');
};

export default function ChoosePlants() {
  const plantData = useLoaderData<typeof loader>();
  const [selectedPlants, setSelectedPlants] = useState<string[]>([]);
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
                  name={name}
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
            <h2>I'm growing:</h2>
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

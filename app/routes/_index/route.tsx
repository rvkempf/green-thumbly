import type { MetaFunction } from '@remix-run/node';
import { Form, redirect } from '@remix-run/react';
import styles from './styles.module.css';

export const meta: MetaFunction = () => {
  return [
    { title: 'Green Thumbly' },
    { name: 'description', content: 'Welcome to Green Thumbly!' },
  ];
};

export const action = async () => {
  return redirect('/chooseplants');
};

export default function Index() {
  return (
    <div className={styles.container}>
      <h1>Where do you live?</h1>
      <Form method="post">
        <input
          type="text"
          pattern="[0-9]{5}"
          name="zipcode"
          placeholder="zipcode"
        />
        <button type="submit">Let&apos;s grow!</button>
      </Form>
    </div>
  );
}

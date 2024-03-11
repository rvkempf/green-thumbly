import type {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  MetaFunction,
} from '@remix-run/node';
import { json } from '@remix-run/node';
import { Form, redirect, useLoaderData } from '@remix-run/react';
import styles from './styles.module.css';
import { userInfo } from '~/cookies/userInfo';

export const meta: MetaFunction = () => {
  return [
    { title: 'Green Thumbly' },
    { name: 'description', content: 'Welcome to Green Thumbly!' },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const cookieHeader = request.headers.get('Cookie');
  const cookie = (await userInfo.parse(cookieHeader)) || {};
  return json({ zipcode: cookie.zipcode });
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const cookieHeader = request.headers.get('Cookie');
  const cookie = (await userInfo.parse(cookieHeader)) || {};
  const formData = await request.formData();

  const zipcode = formData.get('zipcode');
  cookie.zipcode = zipcode;
  return redirect('/chooseplants', {
    headers: {
      'Set-Cookie': await userInfo.serialize(cookie),
    },
  });
};

export default function Index() {
  const { zipcode } = useLoaderData<typeof loader>();
  return (
    <div className={styles.container}>
      <h1>Where do you live?</h1>
      <Form method="post">
        <input
          type="text"
          pattern="[0-9]{5}"
          name="zipcode"
          placeholder="zipcode"
          defaultValue={zipcode}
        />
        <button type="submit">Next</button>
      </Form>
    </div>
  );
}

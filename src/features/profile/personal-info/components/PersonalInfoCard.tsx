import { Card, CardContent, Typography } from '@mui/material';
import { redirect } from 'next/navigation';
import { UserInfo } from '../types/personal-info-types';

export default async function PersonalInfoCard() {
  let data: UserInfo | undefined;
  try {
    const response = await fetch('base-url/user/id');
    data = await response.json();
  }
  catch {
    console.log('error');
  }

  data = {
    id: 42,
    bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt libero et minus distinctio nam ratione quaerat laboriosam cupiditate inventore, alias officiis aspernatur illum, a ullam asperiores totam excepturi praesentium doloremque?',
    email: 'john.doe@mail.com',
    name: 'John Doe',
  };

  if (!data) {
    redirect('/not-found');
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{data?.name}</Typography>
        <Typography>{data?.email}</Typography>
        <Typography>{data?.bio}</Typography>
      </CardContent>
    </Card>
  );
}

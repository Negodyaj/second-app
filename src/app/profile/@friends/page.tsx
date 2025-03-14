import UserCard from "@/app/components/UserCard/UserCard";
import { Typography } from "@mui/material";

export default async function Friends() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const friends = [
    'Frank',
    'Missy',
    'Alice'
  ];
  return (
    <>
      <Typography variant="h2">Friends</Typography>
      {friends.map((t) => (
        <UserCard key={`friend_${t}`} />
      ))}
    </>
  );
}

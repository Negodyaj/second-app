import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';

export default async function Personal() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <>
      <Typography variant="h2">Personal</Typography>
      <Grid container spacing={2}>
        <Grid size={2}>
          <Typography variant="h3">Name:</Typography>
        </Grid>
        <Grid size={10}>
          <Typography>John Doe</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid size={2}>
          <Typography variant="h3">Age:</Typography>
        </Grid>
        <Grid size={10}>
          <Typography>42</Typography>
        </Grid>
      </Grid>
    </>
  );
}

import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import React from 'react'

const UserCard = () => {
  return (
    <Card sx={{ maxWidth: 100 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="60"
          image="https://media.4-paws.org/d/2/5/f/d25ff020556e4b5eae747c55576f3b50886c0b90/cut%20cat%20serhio%2002-1813x1811-720x719.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default UserCard
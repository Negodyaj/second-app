import { Button } from '@mui/material';
import React from 'react'

export async function About() {
  //const [data1, data2, data3] = Promise.all([fetch('url1'), fetch('url2'), fetch('url3')]);
  console.log('server?')
  return (
    <>
      <Button>Left</Button>
      <Button>Right</Button>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </>
  );
};

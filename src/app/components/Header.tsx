'use client'

import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  console.log('header - client component');
  let data;
  if (typeof localStorage !== 'undefined') {
    data = localStorage.getItem('qwerty');
  }
  console.log(data);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Место для лого
        </Typography>
        <Link href="/dashboard">
          <Button color="inherit">Дашборд</Button>
        </Link>
        <Link href="/about">
          <Button color="inherit">О нас</Button>
        </Link>
        <span>{data ?? 'no data'}</span>
        <ThemeToggle />
      </Toolbar>
    </AppBar>
  );
};

export default Header;

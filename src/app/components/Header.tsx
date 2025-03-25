'use client'

import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  

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
        <ThemeToggle />
      </Toolbar>
    </AppBar>
  );
};

export default Header;

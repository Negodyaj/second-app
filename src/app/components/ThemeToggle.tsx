'use client';

import React from 'react';
import { useTheme } from '../theme-context';
import { Switch } from '@mui/material';

const ThemeToggle: React.FC = () => {
  const { mode, toggleTheme } = useTheme();
  const isDarkMode = mode === 'dark';

  console.log('ThemeToggle - client component');
  return (
    <div>
      <Switch checked={isDarkMode} onChange={toggleTheme} />
      <span>{isDarkMode ? 'Темная тема' : 'Светлая тема'}</span>
    </div>
  );
};

export default ThemeToggle;

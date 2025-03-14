'use client';

import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#b719d2', // основной цвет
    },
    secondary: {
      main: '#dc004e', // вторичный цвет
    },
    background: {
      default: '#f5f5f5', // фон по умолчанию
      paper: '#ffffff', // фон для карточек и элементов
    },
    text: {
      primary: '#000000', // основной цвет текста
      secondary: '#555555', // вторичный цвет текста
    },
    error: {
      main: '#f44336', // цвет для ошибок
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // шрифт по умолчанию
    h1: {
      fontWeight: 600,
      fontSize: '2.25rem',
    },
    h2: {
      fontWeight: 500,
      fontSize: '2rem',
    },
    h3: {
      fontWeight: 400,
      fontSize: '1.75rem',
    },
    body1: {
      fontWeight: 400,
      fontSize: '1rem',
    },
  },
  spacing: 8, // базовый отступ
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // скругление углов кнопки
          padding: '8px 16px', // отступы в кнопке
          textTransform: 'none', // отключение преобразования текста в верхний регистр
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: '#1976d2', // изменить цвет для заголовка h1
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // шрифт по умолчанию
    h1: {
      fontWeight: 600,
      fontSize: '2.25rem',
    },
    h2: {
      fontWeight: 500,
      fontSize: '2rem',
    },
    h3: {
      fontWeight: 400,
      fontSize: '1.75rem',
    },
    body1: {
      fontWeight: 400,
      fontSize: '1rem',
    },
  },
  spacing: 8, // базовый отступ
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // скругление углов кнопки
          padding: '8px 16px', // отступы в кнопке
          textTransform: 'none', // отключение преобразования текста в верхний регистр
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: '#1976d2', // изменить цвет для заголовка h1
        },
      },
    },
  },
});

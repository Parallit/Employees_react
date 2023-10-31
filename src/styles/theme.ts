import { ITheme } from 'src/interfaces/styled';

const breakpoints = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const baseTheme: ITheme = {
  colors: {
    neonBlue: '#03e9f4',
    white: '#fff',
    orange: '#ff7101',
    danger: '#ff6781 ',
  },
  bg: {
    primary: 'rgba(0, 0, 0, 0.9)',
    neonBlue: '#03e9f4',
    orange: '#ff7101',
    danger: '#ff6781 ',
    linear:
      'linear-gradient(166deg, rgb(249, 123, 30) 25%, rgb(205, 40, 149) 81%)',
  },
  boxShadow: {
    primary: '0 15px 25px rgba(0, 0, 0, 0.9)',
  },
  // 12-16pt on a mobile screen, 15-19pt on a tablet, and 16-20pt on a desktop computer screen
  fontSize: {
    XXL: '32px',
    extraLarge: '24px',
    large: '20px',
    medium: '18px',
    small: '14px',
  },
  media: {
    mobileS: `(max-width: ${breakpoints.mobileS})`,
    mobileM: `(max-width: ${breakpoints.mobileM})`,
    mobileL: `(max-width: ${breakpoints.mobileL})`,
    tablet: `(max-width: ${breakpoints.tablet})`,
    laptop: `(max-width: ${breakpoints.laptop})`,
    laptopL: `(max-width: ${breakpoints.laptopL})`,
    desktop: `(max-width: ${breakpoints.desktop})`,
  },

  // in px
  // sizes: {
  //     header: { height: 56 },
  //     container: { width: 1200 },
  //     footer: { height: 128 },
  //     modal: { width: 540 },
  // },

  // in ms
  // durations: {
  //     ms300: 300,
  // },

  // z-index
  // order: {
  //     header: 50,
  //     modal: 100,
  // },
};

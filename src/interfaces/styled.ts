export interface ITheme {
  colors: {
    neonBlue: string;
    white: string;
    orange: string;
    danger: string;
  };
  bg: {
    primary: string;
    neonBlue: string;
    orange: string;
    danger: string;
    linear: string;
  };
  boxShadow: {
    primary: string;
  };
  fontSize: {
    XXL: string;
    extraLarge: string;
    large: string;
    medium: string;
    small: string;
  };
  media: {
    mobileS: string;
    mobileM: string;
    mobileL: string;
    tablet: string;
    laptop: string;
    laptopL: string;
    desktop: string;
  };

  // sizes: {
  //     header: { height: number }
  //     container: { width: number }
  //     footer: { height: number }
  //     modal: { width: number }
  // }

  // durations: {
  //     ms300: number
  // }

  // order: {
  //     header: number
  //     modal: number
  // },
}

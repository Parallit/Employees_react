import { ITheme } from "src/interfaces/styled";

const breakpoints = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const baseTheme: ITheme = {
    colors: {
        neonBlue: '#03e9f4',
        white: '#fff',
        orange: '#ff7101',
        danger: '#ff6781 ',
    },
    bg: {
        darkBlue: '#00000080',
        neonBlue: '#03e9f4',
        orange: '#ff7101',
        danger: '#ff6781 ',
    },
    fontSize: {
        extraLarge: '22px',
        large: '20px',
        medium: '18px',
        small: '16px'
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
}
import { ITheme } from "src/interfaces/styled";

export const baseTheme: ITheme = {
    colors: {
        blue: '#03e9f4',
        white: '#fff',
        orange: '#ff7101',
        danger: '#ff6781 ',

        bg: '#00000080',
        // font: '#19191B',
    },
    fontSize: {
        extraLarge: '22px',
        large: '20px',
        medium: '18px',
        small: '16px'
    }

    // media: {
    //     extraLarge: '(max-width: 1140px)',
    //     large: '(max-width: 960px)',
    //     medium: '(max-width: 720px)',
    //     small: '(max-width: 540px)',
    // },

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
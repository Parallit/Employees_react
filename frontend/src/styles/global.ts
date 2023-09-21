import { createGlobalStyle } from 'styled-components'
export default createGlobalStyle`

html {
    height: 100%;
}

body {
    box-sizing: border-box;
    min-height: 100%;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background-image: url(${require('src/assets/images/office.jpg')});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
}

ul {
    padding: 0;
}
`
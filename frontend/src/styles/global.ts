import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
html {
    height: 100%;
}

body {
    min-height: 100%;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background: #0F2027;
    background: -webkit-linear-gradient(to right, #2C5364, #203A43, #142b35);
    background: linear-gradient(to right, #2C5364, #203A43, #142b35);
}
`
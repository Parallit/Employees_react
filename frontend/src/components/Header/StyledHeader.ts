import { baseTheme } from "src/styles/theme"
import { styled } from "styled-components"

export const HeaderContainer = styled.header`
    min-height: 70px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding: 0 30px;
    background: rgba(0, 0, 0, 0.9);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.9);
    position: relative;

    @media ${baseTheme.media.laptopL} {
        display: flex;
        flex-direction: column;
    }
`

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 50px;
    border-radius: 5px;
    justify-self: center;
    background: linear-gradient(166deg, rgba(249,123,30,1) 25%, rgba(205,40,149,1) 81%);

    @media ${baseTheme.media.laptopL} {
        margin: 10px 10px;
        align-self: center;
    }
`
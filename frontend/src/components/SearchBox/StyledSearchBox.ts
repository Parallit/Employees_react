import { baseTheme } from "src/styles/theme"
import { styled } from "styled-components"

export const SearchContainer = styled.div`
    margin: 0 0 30px 0;
    color: #fff;
    max-width: 100%;
    min-height: 50px;
    border-radius: 0 0 15px 15px;
    background: rgba(0, 0, 0, 0.9);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.9);
    padding: 10px 20px;
    position: relative;

    & ul {
        display: grid;
        grid-template-columns: repeat(7, 150px);
        justify-content: center;
        text-align: center;
        column-gap: 15px;
        margin: 0;
        min-height: 50px;
        position: relative;

        @media ${baseTheme.media.laptopL} {
            grid-template-columns: repeat(7, 110px);
        }

        @media ${baseTheme.media.laptop} {
            grid-template-columns: repeat(7, 90px);
            column-gap: 10px;
            min-height: 100px;
        }
    }

    & li {
        list-style-type: none;
        display: flex;
        align-items: center;
        justify-content: center;
        @media ${baseTheme.media.laptop} {
            align-items: end;
        }

        & svg {
            width: 35px;
            height: 35px;
        }
    }

    & li:first-child {
        position: absolute;
        left: 25px;
        top: 0;
        @media ${baseTheme.media.laptopL} {
            left: -10px;
            width: 40px;
            height: 100%;

            & svg {
                width: 25px;
                height: 25px;
            }
        }

        @media ${baseTheme.media.laptop} {
            left: -15px;
            height: 40%;
        }
    }

    & li:last-child {
        position: absolute;
        right: 25px;
        top: 0;

        @media ${baseTheme.media.laptopL} {
            right: -10px;
            width: 40px;
            height: 100%;

            & svg {
                width: 25px;
                height: 25px;
            }
        }

        @media ${baseTheme.media.laptop} {
            right: -15px;
            height: 40%;
        }
    }
`

export const InputItem = styled.li<{
    $gridPosition?: string
}>`
    grid-column-start: ${({ $gridPosition }) => $gridPosition || "1"};
`


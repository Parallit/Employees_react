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
    }

    & li {
        list-style-type: none;
        display: flex;
        align-items: center;
        justify-content: center;

        & svg {
            width: 35px;
            height: 35px;
        }
    }

    & li:first-child {
        position: absolute;
        left: 25px;
        top: 0;
        transition: all 0.5s ease-in-out;
    }

    & li:last-child {
        position: absolute;
        right: 25px;
        top: 0;
        transition: all 0.5s ease-in-out;
    }
`

export const InputItem = styled.li<{
    $gridPosition?: string
}>`
    grid-column-start: ${({ $gridPosition }) => $gridPosition || "1"};
`


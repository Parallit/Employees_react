import { baseTheme } from "src/styles/theme";
import { styled } from "styled-components";

export const ContainerInfo = styled.div<{
    $width?: string,
}>`
    width: ${({ $width }) => $width || "100%"};
    width: 50%;
    text-align: center;
    padding: 40px;
    box-sizing: border-box;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.9);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.9);
    margin-left: 20px;

    @media ${baseTheme.media.laptopL} {
        margin: 0;
    }

    li {
        font-size: 18px;
        padding: 0 20px 0 20px;
        margin: 20px 0 10px 0;
        list-style-type: none;
        color: #fff;
        letter-spacing: 2px;
        display: flex;
        flex-direction: column;
        opacity: 0.8;
    }

    h4 {
        margin: 20px 0;
        font-style: italic;
    }
`

export const MainBox = styled.ul`
    display: flex;
    align-items: center;
    flex-direction: column;
`
export const NameBox = styled.ul`
    display: flex;
    justify-content: space-around;
`

export const DepartmentBox = styled.ul`
    display: flex;
    justify-content: space-around;
    position: relative;
`

export const ContainerBox = styled.ul`
    width: 100%;
`
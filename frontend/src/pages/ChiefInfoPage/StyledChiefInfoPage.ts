import { baseTheme } from "src/styles/theme";
import { styled } from "styled-components";

export const ContainerInfo = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px 0;
    width: 100%;
    gap: 20px;

    @media ${baseTheme.media.laptopL} {
            flex-direction: column;
            align-items: center;
            margin: 0;
        }
`
import { styled } from "styled-components";

export const ContainerFlex = styled.div<
    {
        $padding?: string,
        $margin?: string
    }
>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: ${({ $margin }) => $margin || "0"};
    padding: ${({ $padding }) => $padding || "0"};
`
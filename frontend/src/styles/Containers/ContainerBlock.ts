import { styled } from "styled-components";

export const ContainerBlock = styled.div<
    {
        $padding?: string,
        $margin?: string
    }
>`
    padding: ${({ $padding }) => $padding || "0"};
    margin: ${({ $margin }) => $margin || "0"};
`
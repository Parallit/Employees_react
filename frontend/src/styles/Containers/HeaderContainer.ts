import { styled } from "styled-components";

export const HeaderContainer = styled.header`
    background: ${({ theme }) => theme.colors.bg};
    min-height: 75px;
    display: flex;
    align-items: center;

    ul {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    }
`
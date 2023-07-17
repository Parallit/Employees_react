import { CustomContentBox } from "src/components/Custom/CustomContentBox";
import { styled } from "styled-components";

export const HandbookContentBox = styled(CustomContentBox)`
    margin: 0 0 30px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.white};
    max-width: 100%;
    min-height: 50px;
    border-radius: 15px;
    background: ${({ theme }) => theme.colors.bg};
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);

    & ul {
        display: flex;
        justify-content: space-between;
        list-style-type: none;
        padding: 0 20px;
    }

    & li {
        width: 110px;
        padding: 0 20px 0 20px;
        margin: 10px 0 10px 0;
        letter-spacing: 2px;
        text-align: center;
        overflow: hidden;
    }
`
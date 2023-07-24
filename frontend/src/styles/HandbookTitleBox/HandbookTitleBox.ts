import { CustomTitlesBox } from "src/components/Custom/CustomTitlesBox";
import { styled } from "styled-components";

export const HandbookTitleBox = styled(CustomTitlesBox)`
    margin: 10px 0 30px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.white};
    max-width: 100%;
    min-height: 50px;
    border-radius: 15px;
    background: rgba(0, 0, 0, 0.9);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.9);
    padding: 10px 20px;

    & ul {
        width: 100%;
        display: flex;
        justify-content: center;
        list-style-type: none;
        padding: 0 20px;
        align-items: center;
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

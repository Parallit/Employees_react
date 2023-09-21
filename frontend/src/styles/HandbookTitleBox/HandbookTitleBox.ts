import { CustomTitlesBox } from "src/components/Custom/CustomTitlesBox";
import { styled } from "styled-components";

export const HandbookTitleBox = styled(CustomTitlesBox) <{
    titles: string[]
}>`
    min-height: 70px;
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px 15px 0 0;
    background: rgba(0, 0, 0, 0.9);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.9);
    margin: 10px 0 0;
    padding: 0px 20px;
    
    & ul {
        display: grid;
        grid-template-columns: repeat(7, 150px);
        justify-content: center;
        align-items: center;
        text-align: center;
        column-gap: 15px;
    }

    & li {
        list-style-type: none;
        letter-spacing: 2px;
        overflow: hidden;
    }
`

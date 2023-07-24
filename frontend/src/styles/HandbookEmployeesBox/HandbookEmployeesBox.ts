import { CustomEmployeesBox } from "src/components/Custom/CustomEmployeesBox";
import { styled } from "styled-components";

export const HandbookEmployeesBox = styled(CustomEmployeesBox)`
    color: ${({ theme }) => theme.colors.white};
    max-width: 100%;
    min-height: 50px;
    border-radius: 15px;
    background: rgba(0, 0, 0, 0.9);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.9);
    padding: 10px 20px;

    & ul {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        list-style-type: none;
        padding: 20px 20px;
        background: rgba( 255, 255, 255, 0.05 );
        border-radius: 10px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
        /* overflow: hidden; */
        transition: 1s;
    }

    & li:first-child {
        position: absolute;
        left: -150px;
        transition: 1.2s;
    }

    & ul:hover li:first-child {
        left: 0;
    }

    & li:last-child {
        position: absolute;
        right: -150px;
        transition: 1.2s;
    }

    & ul:hover li:last-child {
        right: 0;
    }

    & ul:hover {
        background: linear-gradient(90deg, rgba(12,6,15,1) 5%, rgba(43,3,35,1) 50%, rgba(20,10,25,1) 100%);
        transform: scale(1.2)
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
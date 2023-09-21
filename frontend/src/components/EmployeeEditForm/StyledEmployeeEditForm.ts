import { styled } from "styled-components";

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    padding: 40px 40px;
    box-sizing: border-box;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.9);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.9);
    margin-right: 20px;

    & h3, h4 {
        margin: 0 0 30px 0;
    padding: 0;
    color: #fff;
    text-align: center;
    font-size: 24px;
    letter-spacing: 2px;
    }

    form {
        width: 80%;
    }
`
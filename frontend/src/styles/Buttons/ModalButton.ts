import { CustomButton } from "src/components/Custom/CustomButton";
import { styled } from "styled-components";

export const ModalButton = styled(CustomButton) <{
    $primaryButton?: boolean;
    $secondaryButton?: boolean;
    $dangerButton?: boolean
}>`
    color: ${({ $defaultColor, theme }) => $defaultColor || theme.colors.white};
    padding: ${({ $padding }) => $padding || "10px 20px"};
    margin: ${({ $margin }) => $margin || "10px"};
    font-size: ${({ $fontSize }) => $fontSize || "16px"};
    cursor: ${({ disabled }) => (!disabled ? "pointer" : "not-allowed")};
    border: none;
    border-radius: 10px;
    letter-spacing: 4px;
    text-transform: uppercase;
    position: relative;
    transition: all 0.5s ease-in-out;

    ${props => props.$primaryButton &&
        `
        background: rgba(0, 0, 0, 0.8);
        box-shadow: 0 15px 25px rgba(0, 0, 0, 0.4);
        
        &:hover {
            background: #03e9f4;
            box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
                0 0 100px #03e9f4;
            }
    `
    }

    ${props => props.$secondaryButton &&
        `
        outline: 1px solid #fff;
        background: none;

        &:hover {
            outline: none;
        }  

        &:after {
            position: absolute;
            content: '';
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            opacity: 0;
            border: none;
            border-radius: 10px;
            background: linear-gradient(166deg, rgba(249,123,30,1) 25%, rgba(205,40,149,1) 81%);
            box-shadow: 0 0 10px #e55455, 0 0 10px #e55455, 0 0 5px #e55455,
                0 0 10px #e55455;
            transition: all 0.5s ease-in-out;
        }

        &:hover:after {
            opacity: 1;
        }
        `
    }

    ${props => props.$dangerButton &&
        `
        outline: 1px solid #fff;
        background: none;
        
        &:hover {
            outline: none;
        }

        &:after {
            position: absolute;
            content: '';
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            opacity: 0;
            border: none;
            border-radius: 10px;
            background: linear-gradient(0deg, rgba(147,0,112,1) 25%, rgba(181,3,9,1) 100%);
            box-shadow: 0 0 10px #a40242, 0 0 10px #a40242, 0 0 5px #a40242,
                0 0 10px #a40242;
            transition: all 0.5s ease-in-out;
        }

        &:hover:after {
            opacity: 1;
        }
        `
    }
`
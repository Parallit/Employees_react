import { CustomButton } from "src/components/Custom/CustomButton";
import { styled } from "styled-components";

export const PrimaryButton = styled(CustomButton)`
    color: ${({ $defaultColor, theme }) => $defaultColor || theme.colors.white};
    padding: ${({ $padding }) => $padding || "10px 20px"};
    margin: ${({ $margin }) => $margin || "10px"};
    font-size: ${({ $fontSize }) => $fontSize || "16px"};
    cursor: ${({ disabled }) => (!disabled ? "pointer" : "not-allowed")};
    background: ${({ $bg }) => $bg || "rgba(0, 0, 0, 0.8)"};
    box-shadow: ${({ $boxShadow }) => $boxShadow || "0 15px 25px rgba(0, 0, 0, 0.4)"};
    text-transform: ${({ $textTransform }) => $textTransform || "uppercase"};
    border: none;
    border-radius: 10px;
    letter-spacing: 4px;
    position: relative;
    transition: all 0.5s ease-in-out;
    
    &:hover {
        color: ${({ $hoverColor, theme }) => $hoverColor || theme.colors.white};;
        background: #03e9f4;
        box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
            0 0 100px #03e9f4;
        }
`
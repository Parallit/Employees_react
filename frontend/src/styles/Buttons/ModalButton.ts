import { CustomButtonModal } from "src/components/Custom/CustomButtonModal";
import { styled } from "styled-components";

export const ModalButton = styled(CustomButtonModal)`
    color: ${({ $defaultColor, theme }) => $defaultColor || theme.colors.white};
    padding: ${({ $padding }) => $padding || "10px 20px"};
    /* margin: ${({ $margin }) => $margin || "20px 10px"}; */
    font-size: ${({ $fontSize }) => $fontSize || "16px"};
    letter-spacing: 4px;
    text-transform: uppercase;
    background: rgba(0, 0, 0, 0.8);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.4);
    border: none;
    border-radius: 10px;
    cursor: ${({ disabled }) => (!disabled ? "pointer" : "not-allowed")};

    &:hover {
    background: #03e9f4;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
        0 0 100px #03e9f4;
    }
`
import { CustomButton } from 'src/components/Custom/CustomButton';
import { styled } from 'styled-components';

export const SecondaryButton = styled(CustomButton)`
  color: ${({ $defaultColor, theme }) => $defaultColor || theme.colors.white};
  padding: ${({ $padding }) => $padding || '10px 20px'};
  margin: ${({ $margin }) => $margin || '10px'};
  font-size: ${({ $fontSize }) => $fontSize || '16px'};
  cursor: ${({ disabled }) => (!disabled ? 'pointer' : 'not-allowed')};
  border: none;
  border-radius: 10px;
  letter-spacing: 4px;
  text-transform: uppercase;
  position: relative;
  transition: all 0.5s ease-in-out;
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
    background: linear-gradient(
      166deg,
      rgba(249, 123, 30, 1) 25%,
      rgba(205, 40, 149, 1) 81%
    );
    box-shadow: 0 0 10px #e55455, 0 0 10px #e55455, 0 0 5px #e55455,
      0 0 10px #e55455;
    transition: all 0.5s ease-in-out;
  }

  &:hover:after {
    opacity: 1;
  }
`;

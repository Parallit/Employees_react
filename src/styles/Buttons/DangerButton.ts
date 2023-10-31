import { CustomButton } from 'src/components/Custom/CustomButton';
import { styled } from 'styled-components';

export const DangerButton = styled(CustomButton)`
  color: ${({ $defaultColor, theme }) => $defaultColor || theme.colors.white};
  padding: ${({ $padding }) => $padding || '10px 20px'};
  margin: ${({ $margin }) => $margin || '10px'};
  font-size: ${({ $fontSize }) => $fontSize || '16px'};
  cursor: ${({ disabled }) => (!disabled ? 'pointer' : 'not-allowed')};
  outline: ${({ $outline }) => $outline || '1px solid #fff'};
  width: ${({ $width }) => $width || '100%'};
  border: none;
  border-radius: 10px;
  letter-spacing: 4px;
  text-transform: uppercase;
  position: relative;
  transition: all 0.5s ease-in-out;
  background: none;
  z-index: 1;

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
      0deg,
      rgba(147, 0, 112, 1) 25%,
      rgba(181, 3, 9, 1) 100%
    );
    box-shadow: 0 0 10px #a40242, 0 0 10px #a40242, 0 0 5px #a40242,
      0 0 10px #a40242;
    transition: all 0.5s ease-in-out;
  }

  &:hover:after {
    opacity: 1;
  }
`;

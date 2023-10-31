import { styled } from 'styled-components';
import { baseTheme } from 'src/styles/theme';

export const ContentContainer = styled.main`
  width: 1420px;
  justify-self: center;
  margin: 0 10px 0 10px;
  @media ${baseTheme.media.laptopL} {
    max-width: 1004px;
  }
  @media ${baseTheme.media.laptop} {
    max-width: 748px;
  }
  @media ${baseTheme.media.tablet} {
    max-width: 405px;
  }
  @media ${baseTheme.media.mobileL} {
    max-width: 355px;
  }
  @media ${baseTheme.media.mobileM} {
    max-width: 300px;
  }
  @media ${baseTheme.media.mobileS} {
    max-width: 260px;
  }
`;

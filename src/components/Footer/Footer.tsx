import { FC } from 'react';
import { styled } from 'styled-components';
import { IconComponent } from 'src/components/Icon';

export const Footer: FC = () => {
  return (
    <>
      <Container>
        <TextBox>
          <TextHeading>employer&apos;s handbook project</TextHeading>
          <SocialBox>
            <SocialItem>
              <IconComponent type={'github'} />
            </SocialItem>
          </SocialBox>
        </TextBox>
        <CopyrightBox>
          <CopyrightText>
            Copyright &copy; {new Date().getFullYear()} All rights reserved |
            This project is made with &#10084; by
            <NameLink href="https://github.com/Parallite"> Parallite</NameLink>
          </CopyrightText>
        </CopyrightBox>
      </Container>
    </>
  );
};

const Container = styled.div`
  left: 0;
  bottom: 0;
  width: 100%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TextBox = styled.div`
  position: relative;
  font-size: 18px;
  margin: 20px 0 20px 0;
  padding: 0 20px 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextHeading = styled.h3`
  font-size: 22px;
  letter-spacing: 1px;
  color: #fff;
  text-transform: uppercase;

  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 3px;
    top: 0;
    left: 0;
    border-radius: 4px;
    background: rgb(249, 123, 30);
    background: linear-gradient(
      166deg,
      rgba(249, 123, 30, 1) 25%,
      rgba(205, 40, 149, 1) 81%
    );
  }
`;

const SocialBox = styled.ul`
  padding: 0 20px 0 20px;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
`;

const SocialItem = styled.li`
  color: #fff;
  & svg {
    width: 45px;
    height: 45px;
  }
`;

const CopyrightBox = styled.div`
  margin: 20px 0 70px 0;
  padding: 0 20px 0 20px;
  color: #fff;
  font-size: 20px;
  letter-spacing: 1px;
`;

const CopyrightText = styled.p`
  color: #fff;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const NameLink = styled.a`
  color: #03e9f4;
  text-decoration: none;
`;

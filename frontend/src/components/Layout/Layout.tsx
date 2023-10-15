import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from 'src/components/Footer';
import { FooterContainer } from 'src/styles/Containers/FooterContainer';
import { LayoutContainer } from 'src/styles/Containers/LayoutContainer';
import { ContentContainer } from 'src/styles/Containers/MainContainer';
import { Header } from 'src/components/Header';

export const Layout: FC = () => {
  return (
    <>
      <LayoutContainer>
        <Header />
        <ContentContainer>
          <section>
                <Outlet />
          </section>
        </ContentContainer>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </LayoutContainer>
    </>
  );
};
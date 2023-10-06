import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLoading } from 'src/store/auth/selectors';
import { Footer } from 'src/components/Footer';
import { FooterContainer } from 'src/styles/Containers/FooterContainer';
import { LayoutContainer } from 'src/styles/Containers/LayoutContainer';
import { ContentContainer } from 'src/styles/Containers/MainContainer';
import { Spinner } from 'src/components/Spinner'
import { Header } from 'src/components/Header';

export const Layout: FC = () => {
  const isLoading = useSelector(selectLoading);
  return (

    <>
      <LayoutContainer>
        <Header/>
        <ContentContainer>
          <section>{isLoading ? <Spinner /> : <Outlet />}</section>
        </ContentContainer>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </LayoutContainer>
    </>
  );
};
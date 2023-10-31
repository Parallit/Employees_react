import { Suspense } from 'react';
import { Await, useLoaderData, useNavigate } from 'react-router-dom';
import { TitlePage } from 'src/styles/Titles/TitlePage';
import { Button } from 'src/styles/Buttons/Button';
import { styled } from 'styled-components';
import { SubordinateInfo } from 'src/components/SubordinateInfo';
import { Spinner } from 'src/components/Spinner';
import { SubordinateLoaderData } from './SubordinateInfoLoader';

export const SubordinateInfoPage = () => {
  const { employee } = useLoaderData() as SubordinateLoaderData;
  const navigate = useNavigate();
  const goBackPage = () => {
    navigate(-1);
  };
  return (
    <>
      <TitlePage>Subordinate information</TitlePage>
      <Button
        onClick={goBackPage}
        $primaryButton
        $padding="20px 30px"
        $margin="10px"
      >
        Go Back
      </Button>
      <Wrapper>
        {/* добавить скелетон */}
        <Suspense fallback={<Spinner />}>
          <Await
            errorElement={<div>Something went wrong!</div>}
            resolve={employee}
          >
            {(resolvedEmployee) => (
              <SubordinateInfo subordinate={resolvedEmployee} />
            )}
          </Await>
        </Suspense>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
`;

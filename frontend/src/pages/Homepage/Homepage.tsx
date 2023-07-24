import { TitlePage } from "src/styles/TitlePage";
import { styled } from "styled-components";

export const Homepage = () => {
  return (
    <>
      <TitlePage>Homepage</TitlePage>
      <Container>
        <TextProjectName>Employer's Handbook</TextProjectName>
        <Text>This project allows you to create cards for employees of your department, edit them and delete the entered information.</Text>
        <Text>Information on all employees is presented in the form of a reference book.</Text>
      </Container>
    </>
  );
};

const Container = styled.div`
  padding: 45px 45px;
  color: #fff;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.8);
`

const TextProjectName = styled.h2`
  margin: 0 0 50px 0;
  padding: 0 20px;
  letter-spacing: 1px;
`

const Text = styled.p`
  padding: 0 20px;
  letter-spacing: 2px;
`
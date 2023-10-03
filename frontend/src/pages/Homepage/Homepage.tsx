import { TitlePage } from 'src/styles/Titles/TitlePage';
import { Container, TextProjectName, Text } from "./StyledHomepage";

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
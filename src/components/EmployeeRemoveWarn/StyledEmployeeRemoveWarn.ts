import { styled } from 'styled-components';

export const RemoveWarnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 40px 40px;
  box-sizing: border-box;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.9);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.9);

  & h3 {
    margin: 20px 0;
    padding: 0 20px;
    color: #ffffff;
    font-size: 22px;
    letter-spacing: 2px;
  }

  p {
    margin: 20px 20px;
    padding: 0 20px;
    font-style: italic;
    color: #ff6781;
    font-size: 16px;
    letter-spacing: 2px;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    width: 60%;
    padding: 0 20px;
  }
`;

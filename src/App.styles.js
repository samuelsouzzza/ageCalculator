import { styled } from 'styled-components';

export const Wrapper = styled.main`
  background-color: hsl(0, 0%, 94%);
  height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;
  @media only screen and (max-width: 400px) {
    display: flex;
    align-items: start;
    justify-content: center;
    padding: 5%;
  }
`;
export const Card = styled.section`
  background-color: hsl(0, 0%, 100%);
  height: 60%;
  min-width: 400px;
  width: 35%;
  border-radius: 20px;
  border-bottom-right-radius: 130px;
  padding: 2.5%;
  @media only screen and (max-width: 400px) {
    min-width: 300px;
    height: auto;
  }
`;

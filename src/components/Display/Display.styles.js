import { styled, keyframes } from 'styled-components';

const fadeIn = keyframes`
 from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.article`
  height: 65%;
  display: flex;
  flex-direction: column;
  margin: 5% 0;
  @media only screen and (max-width: 400px) {
    margin: 10% 0;
  }
`;
export const Label = styled.label`
  font-size: 4rem;
  font-weight: bold;
  font-style: italic;
  line-height: 4rem;
  @media only screen and (max-width: 400px) {
    font-size: 3rem;
  }
`;
export const Info = styled.p`
  color: hsl(259, 100%, 65%);
  display: inline-flex;
  animation: ${fadeIn} 0.3s forwards;
`;

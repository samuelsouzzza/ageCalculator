import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  height: 30%;
  width: 85%;
  border-bottom: 1px solid hsl(0, 0%, 86%);
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 0.75rem;
  color: hsl(0, 1%, 44%);
`;
export const Input = styled.input`
  font-size: 1.5rem;
  border-radius: 10px;
  padding: 5%;
  width: 85%;
  border: 1px solid hsl(0, 0%, 86%);
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    appearance: none;
    -webkit-appearance: none;
  }
  &:focus {
    border-color: hsl(259, 100%, 65%);
  }
`;
export const SendButton = styled.button`
  background-color: hsl(259, 100%, 65%);
  position: absolute;
  top: 36%;
  left: 60.5%;
  height: 50px;
  width: 50px;
  border-radius: 50px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: scale(1.25);
  }
`;

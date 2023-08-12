import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 6px;
  row-gap: 15px;
  width: 300px;
  font-size: 18px;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  width: 300px;
`;

export const Input = styled.input`
  padding: 5px;
  border-radius: 6px;
  border: 1px solid grey;
  font-size: 16px;
`;

export const Button = styled.button`
  width: 100px;
  padding: 5px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 6px;
  border: 1px solid grey;
  background-color: transparent;
  font-weight: 600;
  cursor: pointer;
`;

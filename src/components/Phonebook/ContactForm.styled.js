import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 500px;
  border: 1px solid black;
  padding: 20px;
`;

export const LableForm = styled.label`
  display: flex;
  gap: 10px;
  flex-direction: column;
  font-size: 24px;
  line-height: 1;
  color: black;
  width: 200px;
`;

export const InputForm = styled.input`
  padding: 10px 6px;
  border: 1px solid firebrick;
  border-radius: 6px;
`;

export const BtnForm = styled.button`
  font-size: 16px;
  padding: 6px;
  width: 100px;
  border: 1px solid firebrick;
  border-radius: 6px;
  cursor: pointer;
`;

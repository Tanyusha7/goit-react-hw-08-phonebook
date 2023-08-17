import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 400px;
  border: 1px solid gray;
  border-radius: 6px;
  padding: 20px;
  margin-top: 10px;
  margin-left: 40px;
`;

export const LableForm = styled.label`
  display: flex;
  gap: 10px;
  flex-direction: column;
  font-size: 16px;
  line-height: 1;
  color: black;
  width: 300px;
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

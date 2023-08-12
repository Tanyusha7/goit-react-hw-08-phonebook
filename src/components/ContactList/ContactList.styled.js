import styled from '@emotion/styled';

export const List = styled.ul`
  width: 600px;
  font-size: 24px;
  color: black;
  padding-left: 10px;
  list-style: square;
`;

export const SearchText = styled.p`
  margin-left: 15px;
  font-size: 24px;
  line-height: 1;
  font-size: 700;
  margin-top: 30px;
  color: red;
`;

export const ContactItem = styled.li`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-left: 20px;
  list-style: inside;
`;

export const MarkerOfList = styled.span`
  width: 8px;
  height: 8px;
  border: 1px solid firebrick;
  background: black;
  border-radius: 50%;
`;

export const BtnDeleteContact = styled.button`
  width: 100px;
  padding: 6px;
  font-size: 16px;
  border: 1px solid firebrick;
  border-radius: 6px;
  cursor: pointer;
`;

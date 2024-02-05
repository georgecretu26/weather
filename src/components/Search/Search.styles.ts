import styled from "styled-components";

export const SearchWrapperCss = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const InputCss = styled.input`
  padding: 10px;
  margin: 10px;
  width: 200px;
`;

export const UnorderedListCss = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const ListItemCss = styled.li`
  cursor: pointer;
  border: 1px solid #ccc;
  border-bottom: none;
  list-style: none;

  :hover {
    background-color: #f9f9f9;
  }
  :last-child {
    border-bottom: 1px solid #ccc;
  }
`;

export const ListItemLabelCss = styled.p`
  margin: 0;
  padding: 10px;
`;

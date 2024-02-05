import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const CardWrapperCss = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  padding: 20px;
  width: auto;
  margin: 15px;
  box-shadow: 5px 5px 5px 5px #ccc;
  max-width: 600px;
`;

export const IconCss = styled(FontAwesomeIcon)`
  color: blue;
  font-size: 100px;
  text-align: center;
  padding: 15px;
`;

export const SectionCss = styled.section`
  padding: 10px;
`;

export const RowCss = styled.p`
  padding: 5px;
  margin: 0;
`;

export const FlagIcon = styled.span`
  font-size: 32px;
`;

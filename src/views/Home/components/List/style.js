import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 75% 25%;
  grid-gap: 1rem;
  grid-auto-rows: minmax(min-content, max-content);
  border-bottom: 1px solid black;
`;

export const Comment = styled.p`
  word-wrap: break-word;
  text-align: center;
`;

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

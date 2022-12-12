import styled from "styled-components";

export const SelectStyled = styled.select`
  height: 4.4rem;
  width: 100%;
  padding: 0rem 1.6rem;
  background-color: var(--color-grey2);
  outline: none;
  color: var(--color-grey1);
  border-radius: 0.4rem;
  border: 0.1rem solid var(--color-grey2);

  &&:focus {
    color: var(--color-grey0);
    border: 0.1rem solid var(--color-grey0);
  }
`;

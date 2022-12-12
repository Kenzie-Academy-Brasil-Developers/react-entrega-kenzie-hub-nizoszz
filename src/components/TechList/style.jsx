import styled from "styled-components";

export const TechUl = styled.ul`
  max-height: 41.637rem;
  background-color: var(--color-grey3);
  padding: 2.3rem 2.6rem;
  border-radius: 0.286rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0;
  }
`;

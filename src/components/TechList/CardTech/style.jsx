import styled from "styled-components";
export const CardTechStyled = styled.li`
  min-height: 4.9rem;
  background-color: var(--color-grey3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 1.218rem;
  filter: brightness(0.8);
  border-radius: 0.4rem;
  cursor: pointer;

  &&:hover {
    background-color: var(--color-grey2);
    color: var(--color-grey0);
    filter: brightness(1);
  }

  && > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 13rem;
    gap: 2.5rem;
    margin-right: 1rem;
  }
`;

export const TrashButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;

  && img {
    align-self: center;
    object-fit: cover;
    height: 1.3rem;
    width: 1.2rem;
  }
`;

import styled from "styled-components";

export const RegisterPageContainer = styled.div`
  margin-top: 4.8rem;
  width: 36.9rem;
  display: flex;
  flex-direction: column;
  gap: 3.6rem;

  && img {
    width: 14.4rem;
    height: 2rem;
    align-self: center;
  }

  @media (max-width: 425px) {
    width: 29.6rem;
    && img {
      align-self: center;
      width: 10.1rem;
      height: 1.4rem;
    }
  }
`;

export const RegisterFormContainer = styled.div`
  padding: 4.2rem 2.2rem;
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey3);
  border-radius: 0.4rem;
  gap: 2.2rem;
`;

export const HeaderDiv = styled.header`
  display: flex;
  justify-content: space-between;
`;

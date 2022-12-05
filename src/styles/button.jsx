import styled, { css } from "styled-components";

export const ButtonStyled = styled.button`
  font-weight: ${({ weigth }) => weigth};
  ${({ buttonStyle }) => {
    switch (buttonStyle) {
      default:
        return css`
          width: 100%;
          max-width: 32.4rem;
          height: 4.8rem;
          padding: 0rem 2.2rem;
          text-align: center;
          background-color: var(--color-primary);
          color: var(--color-grey0);
          border: 0.1rem solid var(--color-primary);
          border-radius: 0.4rem;
          cursor: pointer;

          &&:hover {
            background-color: var(--color-primary-focus);
            border: 0.1rem solid var(--color-primary-focus);
          }
          &&:focus {
            background-color: var(--color-primary-focus);
          }
        `;
      case "greyButtonDefault":
        return css`
          width: 100%;
          max-width: 32.4rem;
          height: 4.8rem;
          padding: 0rem 2.2rem;
          text-align: center;
          background-color: var(--color-grey1);
          color: var(--color-grey0);
          border: 0.1rem solid var(--color-grey1);
          border-radius: 0.4rem;
          cursor: pointer;
          &&:hover {
            background-color: var(--color-grey2);
            border: 0.1rem solid var(--color-grey2);
          }
          &&:focus {
            background-color: var(--color-grey2);
          }
        `;
      case "disabledButton":
        return css`
          width: 100%;
          max-width: 32.4rem;
          height: 4.8rem;
          padding: 0rem 2.2rem;
          text-align: center;
          background-color: var(--color-primary-negative);
          color: var(--color-grey0);
          border: 0.1rem solid var(--color-primary-negative);
          border-radius: 0.4rem;
        `;
      case "defaultButtonSmall":
        return css`
          width: 6.7rem;
          height: 4.8rem;
          padding: 0rem 1.6rem;
          text-align: center;
          background-color: var(--color-grey3);
          color: var(--color-grey0);
          border: 0.1rem solid var(--color-grey3);
          border-radius: 0.4rem;
          cursor: pointer;
          &&:hover {
            background-color: var(--color-grey1);
            border: 0.1rem solid var(--color-grey1);
          }
        `;
    }
  }}
`;

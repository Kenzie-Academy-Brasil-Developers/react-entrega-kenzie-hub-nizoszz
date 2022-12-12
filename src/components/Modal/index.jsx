import { StyledTitle } from "../../styles/typography";
import { ModalContainer, ModalWrapper } from "./style";
import { MdClose } from "react-icons/md";
import { useContext, useRef } from "react";
import { TechContext } from "../../contexts/TechContext";
import { ModalForm } from "./ModalForm";
import { useOutClick } from "../../hooks/useOutClick";

export const Modal = () => {
  const { setModal, createTechnology } = useContext(TechContext);

  const modalRemove = () => {
    setModal(false);
  };

  const close = useRef();
  useOutClick(close, () => setModal(false));

  return (
    <ModalWrapper>
      <ModalContainer ref={close}>
        <div>
          {createTechnology ? (
            <StyledTitle tag="Title3" titleStyle="Title3" color="#F8F9FA">
              Register technology
            </StyledTitle>
          ) : (
            <StyledTitle tag="Title3" titleStyle="Title3" color="#F8F9FA">
              Technology details
            </StyledTitle>
          )}

          <button>
            <MdClose size={26} color="#868E96" onClick={modalRemove} />
          </button>
        </div>
        <ModalForm />
      </ModalContainer>
    </ModalWrapper>
  );
};

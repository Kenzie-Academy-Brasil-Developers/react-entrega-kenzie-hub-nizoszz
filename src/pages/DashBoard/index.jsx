import { useContext } from "react";
import { Modal } from "../../components/Modal";
import { TechContext } from "../../contexts/TechContext";
import { Header } from "./Header";
import { Main } from "./Main";
import { Navbar } from "./Navbar";

export const DashBoard = () => {
  const { modal } = useContext(TechContext);

  return (
    <>
      {modal && <Modal />}
      <Navbar />
      <Header />
      <Main />
    </>
  );
};

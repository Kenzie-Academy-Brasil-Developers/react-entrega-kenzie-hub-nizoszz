import { Header } from "./Header";
import { Main } from "./Main";
import { Navbar } from "./Navbar";

export const DashBoard = ({ userLogout, user }) => {
  return (
    <>
      <Navbar userLogout={userLogout} />
      <Header user={user} />
      <Main />
    </>
  );
};

import { RoutesComponent } from "./routes";
import "react-toastify/dist/ReactToastify.css";
import { StyledContainer } from "./styles/toastTheme";
import { AuthContext } from "./contexts/AuthContext";
import { useContext } from "react";

export const App = () => {
  const { globalLoading } = useContext(AuthContext);
  return (
    <>
      {globalLoading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <RoutesComponent />
          <StyledContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          <StyledContainer />
        </>
      )}
    </>
  );
};

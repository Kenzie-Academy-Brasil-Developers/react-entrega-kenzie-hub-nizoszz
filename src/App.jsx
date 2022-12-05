import { useState } from "react";
import { toast } from "react-toastify";
import { RoutesComponent } from "./routes";
import { api } from "./services/api";
import "react-toastify/dist/ReactToastify.css";
import { MessageToast } from "./styles/messageToast";
import { StyledContainer } from "./styles/toastTheme";
import { useNavigate } from "react-router-dom";

export const App = () => {
  const localStorageToken = localStorage.getItem("@TOKEN");
  const localStorageUserId = localStorage.getItem("@USERID");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const userLogin = async (data, setLoading) => {
    try {
      setLoading(true);
      const request = await toast.promise(api.post("sessions", data), {
        pending: {
          render() {
            return <MessageToast message="Carregando..." />;
          },
          icon: true,
          theme: "dark",
        },
        success: {
          render({ data }) {
            return (
              <MessageToast message={`Bem-vindo ${data.data.user.name}`} />
            );
          },
          icon: true,
          theme: "dark",
        },
        error: {
          render({ data }) {
            return <MessageToast message={data.response.data.message} />;
          },
          icon: true,
          theme: "dark",
        },
      });
      if (request.statusText === "OK") {
        console.log(request.data);
        setUser(request.data);
        localStorage.setItem("@TOKEN", request.data.token);
        localStorage.setItem("@USERID", request.data.user.id);
        navigate("user");
        return request.data;
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const userLogout = () => {
    localStorage.clear();
    setUser(null);
    navigate("");
  };

  const userRegister = async (data, setLoading) => {
    try {
      setLoading(true);
      const request = await toast.promise(api.post("users", data), {
        pending: {
          render() {
            return <MessageToast message="Carregando..." />;
          },
          icon: true,
          theme: "dark",
        },
        success: {
          render() {
            return <MessageToast message="Conta criada com sucesso!" />;
          },
          icon: true,
          theme: "dark",
        },
        error: {
          render({ data }) {
            return <MessageToast message={data.response.data.message} />;
          },
          icon: true,
          theme: "dark",
        },
      });
      navigate("");
      return request.data;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <RoutesComponent
        navigate={navigate}
        userLogin={userLogin}
        user={user}
        userLogout={userLogout}
        userRegister={userRegister}
      />
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
    </div>
  );
};

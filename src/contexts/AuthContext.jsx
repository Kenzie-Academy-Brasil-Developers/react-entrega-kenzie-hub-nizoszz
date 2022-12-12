import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { MessageToast } from "../styles/messageToast";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [globalLoading, setGlobalLoading] = useState(false);
  const token = localStorage.getItem("@TOKEN");

  useEffect(() => {
    (async () => {
      if (token) {
        try {
          setGlobalLoading(true);
          const request = await api.get("profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (request.statusText === "OK") {
            setUser(request.data);
            navigate("user");
          }
        } catch (error) {
          localStorage.clear();
          setUser(null);
          navigate("");
        } finally {
          setGlobalLoading(false);
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const userLogin = async (data, setLoading) => {
    try {
      setLoading(true);
      const request = await toast.promise(api.post("sessions", data), {
        pending: {
          render() {
            return <MessageToast message="Loading..." />;
          },
          icon: true,
          theme: "dark",
        },
        success: {
          render({ data }) {
            return <MessageToast message={`Hello ${data.data.user.name}!`} />;
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
        setUser(request.data.user);

        localStorage.setItem("@TOKEN", request.data.token);
        localStorage.setItem("@USERID", request.data.user.id);

        navigate("user");
      }
    } catch (error) {
      return error;
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
            return <MessageToast message="Loading..." />;
          },
          icon: true,
          theme: "dark",
        },
        success: {
          render() {
            return <MessageToast message="Create account successfully!" />;
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
    <AuthContext.Provider
      value={{
        userLogout,
        userRegister,
        user,
        navigate,
        userLogin,
        globalLoading,
        token,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

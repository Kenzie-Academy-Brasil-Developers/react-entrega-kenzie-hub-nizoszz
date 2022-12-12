import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { MessageToast } from "../styles/messageToast";
import { AuthContext } from "./AuthContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { token, setUser } = useContext(AuthContext);
  const [modal, setModal] = useState(false);
  const [createTechnology, setCreateTechnology] = useState(false);
  const [idTechnology, setIdTechnology] = useState();
  const [technologyEdit, setTechnologyEdit] = useState();
  const [technology, setTechnology] = useState();

  useEffect(() => {
    const userLoad = async () => {
      if (!token) {
        return;
      }
      try {
        const request = await api.get("profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (request.statusText === "OK") {
          setUser(request.data);
        }
      } catch (error) {
        return error;
      } finally {
      }
    };
    userLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [technology]);

  const addTechnology = async (data, setLoading) => {
    try {
      setLoading(true);
      const request = await toast.promise(
        api.post("users/techs", data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
        {
          pending: {
            render() {
              return <MessageToast message="Loading..." />;
            },
            icon: true,
            theme: "dark",
          },
          success: {
            render() {
              return <MessageToast message="Added technology successfully" />;
            },
            icon: true,
            theme: "dark",
          },
          error: {
            render() {
              return <MessageToast message="Technology not added" />;
            },
            icon: true,
            theme: "dark",
          },
        }
      );

      if (request.statusText === "Created") {
        setTechnology(request.data);
      }
    } catch (error) {
      return error;
    } finally {
      setLoading(false);
    }
  };

  const deleteTechnology = async (id, setLoading) => {
    try {
      setLoading(true);
      const request = await toast.promise(
        api.delete(`users/techs/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
        {
          pending: {
            render() {
              return <MessageToast message="Loading..." />;
            },
            icon: true,
            theme: "dark",
          },
          success: {
            render() {
              return <MessageToast message="Technology removal successfully" />;
            },
            icon: true,
            theme: "dark",
          },
          error: {
            render() {
              return <MessageToast message="Technology removal failed" />;
            },
            icon: true,
            theme: "dark",
          },
        }
      );
      setTechnology(request.data);
    } catch (error) {
      return error;
    } finally {
      setLoading(false);
    }
  };

  const editTechnology = async (id, data, setLoading) => {
    try {
      setLoading(true);
      const request = await toast.promise(
        api.put(`users/techs/${id}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
        {
          pending: {
            render() {
              return <MessageToast message="Loading..." />;
            },
            icon: true,
            theme: "dark",
          },
          success: {
            render() {
              return <MessageToast message="Technology edit successfully" />;
            },
            icon: true,
            theme: "dark",
          },
          error: {
            render() {
              return <MessageToast message="Technology edit failed" />;
            },
            icon: true,
            theme: "dark",
          },
        }
      );
      setTechnology(request.data);
    } catch (error) {
      return error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <TechContext.Provider
      value={{
        addTechnology,
        deleteTechnology,
        setModal,
        modal,
        setCreateTechnology,
        createTechnology,
        setIdTechnology,
        idTechnology,
        setTechnologyEdit,
        technologyEdit,
        editTechnology,
        technology,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};

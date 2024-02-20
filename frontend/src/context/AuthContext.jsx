import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router";

const AuthContext = createContext();

export function AuthProvider({children}){

  const navigate = useNavigate()

  const [isLogged, setIsLogged] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const handleCloseModal = () => {
    setShowModal(!showModal);
  };
  const handleOpenModal = () => {
    setShowModal(true)
  }

  function handleLogout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLogged(false)
    setShowModal(true)
  }

  function handleLogin(){
    setIsLogged(true)
  }

  useEffect(() => {
    const hasToken = localStorage.getItem('token');
    if(hasToken){
      setIsLogged(true)
  }
  },[isLogged])

  return (
    <AuthContext.Provider value={{isLogged, handleLogout, handleLogin, showModal, handleCloseModal, handleOpenModal}}>
      {children}
    </AuthContext.Provider>
  )
  
};
export const useAuth = () => useContext(AuthContext);

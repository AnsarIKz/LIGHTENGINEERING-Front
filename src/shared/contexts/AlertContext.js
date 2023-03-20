import React, { useState, createContext, useContext } from "react";
import styled from "styled-components";
import { FontBodyBold } from "../fonts";

export const AlertContext = createContext();

const AlertWrapper = styled.div`
  position: fixed;
  top: 50px;
  right: 50%;
  transform: translate(50%);
  padding: 20px;
  background-color: #232323;
  opacity: 1;
  opacity: 0.8;
  border-radius: 5px;
  box-shadow: 0 0 10px #333;
  z-index: 99;
  display: ${({ show }) => (show ? "block" : "none")};
`;

function Alert() {
  const { show, message } = useContext(AlertContext);

  return (
    <AlertWrapper show={show}>
      <FontBodyBold>{message}</FontBodyBold>
    </AlertWrapper>
  );
}

export function AlertProvider({ children }) {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  const handleShow = (message) => {
    setMessage(message);
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  };

  const handleHide = () => {
    setShow(false);
  };

  return (
    <AlertContext.Provider
      value={{
        show,
        message,
        handleShow,
        handleHide,
      }}
    >
      <Alert />
      {children}
    </AlertContext.Provider>
  );
}

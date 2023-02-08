import { createContext, useState } from "react";
import DynamicModal from "../components/utils/DynamicModal";

export const ModalContext = createContext(null);

export const ModalProvider = ({ children }) => {
  const [modalShow, setModalShow] = useState(false);
  const [modalContent, setModalContent] = useState(<></>);
  const [modalTitle, setModalTitle] = useState("");

  const modalClose = () => {
    setModalTitle("");
    setModalContent(<></>);
    setModalShow(false);
  };

  return (
    <ModalContext.Provider
      value={{
        setModalShow,
        setModalContent,
        setModalTitle,
      }}
    >
      {children}
      <DynamicModal
        content={modalContent}
        show={modalShow}
        handleClose={modalClose}
        title={modalTitle}
      />
    </ModalContext.Provider>
  );
};

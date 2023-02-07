import { createContext } from "chart.js/dist/helpers/helpers.options";
import { useState } from "react";
import DynamicModal from "../components/utils/DynamicModal";

export const ModalContext = createContext(null);

export default function ModalProvider({ children }) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <ModalContext.Provider value={{ modalShow, setModalShow }}>
      {children}
      <DynamicModal
        show={modalShow}
        handleClose={() => {
          setModalShow(!modalShow);
        }}
        title="Test menu"
        content={<></>}
      />
    </ModalContext.Provider>
  );
}

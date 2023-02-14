import { Alert, Snackbar } from "@mui/material";
import { createContext, useState } from "react";

export const ToastContext = createContext(null);

export const ToastProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("success");
  const [message, setMessage] = useState("");

  const handleClose = () => {
    setOpen(false);
    setMessage("");
    setType("success");
  };

  return (
    <ToastContext.Provider value={{ setType, setMessage, setOpen }}>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity={type} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </ToastContext.Provider>
  );
};

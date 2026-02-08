import React, { createContext } from 'react';

export const ToastContext = createContext();

function ToastProvider({children}) {
  const [toastStack, setToastStack] = React.useState([]);
  return <ToastContext.Provider value={{toastStack, setToastStack}}>{children}</ToastContext.Provider>;
}

export default ToastProvider;

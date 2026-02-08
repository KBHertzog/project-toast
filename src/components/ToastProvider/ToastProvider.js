import React, { createContext } from 'react';

import useEscapeKey from '../../hooks/useEscapeKey';

export const ToastContext = createContext();

function ToastProvider({children}) {
  const [toastStack, setToastStack] = React.useState([]);
  const dismissAllToasts = React.useCallback(() => {
      setToastStack([]);
    }, []);
  useEscapeKey(dismissAllToasts);
  return <ToastContext.Provider value={{toastStack, setToastStack}}>{children}</ToastContext.Provider>;
}

export default ToastProvider;

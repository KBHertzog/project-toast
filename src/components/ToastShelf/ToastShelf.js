import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toastStack, setToastStack }) {
  return (
    <ol className={styles.wrapper}>
      {toastStack.map(({message, variant, id}) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast variant={variant} onDismiss={() => {
            setToastStack(toastStack.filter(toast => toast.id !== id));
          }}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;

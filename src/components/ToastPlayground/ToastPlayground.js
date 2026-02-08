import React from 'react';

import { ToastContext } from '../ToastProvider';
import Button from '../Button';
import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf/ToastShelf';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const { setToastStack} = React.useContext(ToastContext);
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <form className={styles.controlsWrapper} onSubmit={(e) => {
        e.preventDefault();
        if (!message){
          return;
        } else if (!VARIANT_OPTIONS.includes(variant)){
          return;
        }
        setToastStack(prevToastStack => [...prevToastStack, {message, variant, id: crypto.randomUUID()}]);
        setMessage('');
        setVariant(VARIANT_OPTIONS[0]);
      }}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} value={message} onChange={(e) => setMessage(e.target.value)} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
           {VARIANT_OPTIONS.map((option) => (
             <label key={option} htmlFor={`variant-${option}`}>
              <input
                id={`variant-${option}`}
                type="radio"
                name="variant"
                value={option}
                checked={variant === option}
                onChange={(e) => setVariant(e.target.value)}
              /> 
              {option}
            </label>))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;

import React from 'react';
import styles from './Loader.module.css';

const Loader: React.FC = () => {
  return (
    <div className={styles.banterLoader}>
      <div className={styles.banterLoader__box}></div>
      <div className={styles.banterLoader__box}></div>
      <div className={styles.banterLoader__box}></div>
      <div className={styles.banterLoader__box}></div>
      <div className={styles.banterLoader__box}></div>
      <div className={styles.banterLoader__box}></div>
      <div className={styles.banterLoader__box}></div>
      <div className={styles.banterLoader__box}></div>
      <div className={styles.banterLoader__box}></div>
    </div>
  );
};

export default Loader;

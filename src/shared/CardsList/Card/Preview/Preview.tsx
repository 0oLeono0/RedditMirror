import React from 'react';
import styles from './preview.css';

export function Preview() {
  return (
    <div className={styles.preview}>
      <img src="https://cdn.dribbble.com/userupload/4164273/file/original-c972a93f521d4634e0025c08b3c1b933.png?compress=1&resize=752x" alt="" className={styles.previewImg} />
    </div>
  );
}

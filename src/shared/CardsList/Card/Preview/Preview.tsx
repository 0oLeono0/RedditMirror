import React from 'react';
import styles from './preview.css';
import { ICardProps } from '../Card';

export function Preview({thumbnail}:Pick<ICardProps, "thumbnail">) {
  return (
    <div className={styles.preview}>
      <img src={thumbnail === 'default' || thumbnail === 'self' ?
              "https://cdn.dribbble.com/userupload/3735911/file/original-e36b9481ee6f30f4bf59e05972264336.png?compress=1&resize=400x300&vertical=top"
              : thumbnail} alt="" className={styles.previewImg} />
    </div>
  );
}

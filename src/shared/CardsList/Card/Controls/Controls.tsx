import React from 'react';
import { CommentButton } from './CommentButton';
import styles from './controls.css';
import { KarmaCounter } from './KarmaCounter';
import { SaveButton } from './SaveButton';
import { ShareButton } from './ShareButton';

interface IControlsProps {
  score: number
}

export function Controls({score}: IControlsProps) {
  return (
    <div className={styles.controls}>
      <KarmaCounter score={score}/>
      <CommentButton />
      <div className={styles.actions}>
        <ShareButton />
        <SaveButton />
      </div>
    </div>
  );
}

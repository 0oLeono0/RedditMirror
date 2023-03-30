import React from 'react';
import { CommentButton } from './CommentButton';
import styles from './controls.css';
import { KarmaCounter } from './KarmaCounter';
import { SaveButton } from './SaveButton';
import { ShareButton } from './ShareButton';

export function Controls() {
  return (
    <div className={styles.controls}>
      <KarmaCounter></KarmaCounter>
      <CommentButton></CommentButton>
      <div className={styles.actions}>
        <ShareButton></ShareButton>
        <SaveButton></SaveButton>
      </div>
    </div>
  );
}

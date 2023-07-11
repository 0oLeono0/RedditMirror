import React from 'react';
import styles from './karmacounter.css';
import { EIcon, Icons } from '../../../../Icon';

interface IKarmaCounterProps {
  score: number
}

export function KarmaCounter({score}: IKarmaCounterProps) {
  return (
    <div className={styles.karmaCounter}>
      <button className={styles.up}>
        <Icons name={EIcon.karma} />
      </button>
      <span className={styles.karmaValue}>{score}</span>
      <button className={styles.down}>
        <Icons name={EIcon.karma} />
      </button>
    </div>
  );
}

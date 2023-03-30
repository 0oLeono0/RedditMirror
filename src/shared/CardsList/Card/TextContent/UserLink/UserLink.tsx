import React from 'react';
import styles from './userlink.css';

export function UserLink() {
  return (
    <div className={styles.userLink}>
      <img src="https://cdn.dribbble.com/users/6850340/avatars/normal/09e52d7cca4f82c18e68ba67bbaeb1dc.png?1664764970" alt="avatar" className={styles.avatar} />
      <a href="#user-url" className={styles.username}>Дмитрий Гришин</a>
    </div>
  );
}

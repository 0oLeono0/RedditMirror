import React from 'react';
import styles from './userlink.css';

export interface IUserLinkProps {
  author?: string
  icon_img?: string
}

export function UserLink({author, icon_img}: IUserLinkProps) {
  return (
    <div className={styles.userLink}>
      <img src={icon_img === '' ?
              "https://cdn.shopify.com/s/files/1/0506/0850/4989/files/75-756814_login-user-imagen-user-png-clipart.png?v=1611264227"
              : icon_img} alt="avatar" className={styles.avatar} />
      <a href="#user-url" className={styles.username}>{author}</a>
    </div>
  );
}

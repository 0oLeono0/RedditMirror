import React, { useState } from 'react';
import styles from './title.css';
import { Post } from '../../../../Post';
import { Link } from 'react-router-dom';

interface ITitleProps {
  title?: string
  postID: string
  subreddit: string
}

export function Title({title, postID }:ITitleProps) {

  return (
    <h2 className={styles.title}>
      <Link to={'/posts/'+postID} className={styles.postLink}>
        {title}
      </Link>
    </h2>
  );
}

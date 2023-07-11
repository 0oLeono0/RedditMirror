import React, { useState } from 'react';
import styles from './title.css';
import { Post } from '../../../../Post';

interface ITitleProps {
  title?: string
  postID: string
  subreddit: string
}

export function Title({title, postID, subreddit}:ITitleProps) {
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <h2 className={styles.title}>
      <a href="#post-url" className={styles.postLink} onClick={() => { setIsModalOpened(true); }}>
        {title}
      </a>

      {isModalOpened && (
        <Post 
          onClose={() => { setIsModalOpened(false); } } postID={postID} subreddit={subreddit}/>
      )}
    </h2>
  );
}

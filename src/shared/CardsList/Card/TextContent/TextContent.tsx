import React from 'react';
import styles from './textcontent.css';
import { Title } from './Title';
import { UserLink } from './UserLink';
import { ICardProps } from '../Card';

export function TextContent(props: ICardProps) {
  const { created, author, icon_img, title, postID, subreddit} = props;
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <UserLink {...{author, icon_img}}/>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>Опубликованно</span>
          {created}
        </span>
      </div>
      <Title subreddit={subreddit} postID={postID} {...{ title }}/>
    </div>
  );
}

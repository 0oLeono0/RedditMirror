import React from 'react';
import { useCommentsData } from '../../../hooks/useCommentData';
import { ICardProps } from '../../CardsList/Card';
import styles from './comments.css';
import { Comment } from './Comment/Comment';

export function Comments(props: ICardProps) {
  const { postID, subreddit } = props;
  const comments = useCommentsData(subreddit, postID);
  console.log(comments)

  return (
    <div className={styles.commentWrapper}>
      <div className={styles.commentsSorted}>
        <span className={styles.commentSortedText}>Сортировать по: <button className={styles.commentSortedBtn}>Лучшее</button></span>
      </div>
      <div className={styles.comments}>
        {comments.map(({ data }) => {
          if (typeof data.body === "undefined") return;
          return (<Comment {...data}/>);
        }
        )}
      </div>
    </div>
  );
}

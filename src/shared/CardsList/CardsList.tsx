import React from 'react';
import { Card } from './Card/Card';
import styles from './cardslist.css';
import { usePostsData } from '../../hooks/usePostsData';

export interface IPostData {
  data: {
    subreddit_name_prefixed: string;
    id: string;
    author: string
    subreddit: string
    thumbnail: string
    title: string
    score: number
    created: string
    sr_detail: {
      icon_img: string
    }
  }
}


export function CardsList() {
  const { data, loading, error, bottomOfList, btnFlag, handleLoad } = usePostsData();

  return (
    <ul className={styles.cardsList}>
      {Object.values(data).length === 0 && !loading && !error && (
        <div role='alert' style={{ textAlign: 'center' }}>Нет ни одного поста</div>
      )}

      {Object.values(data).map(({ data }: IPostData) => {
        return (
          < Card
            postID={data.id}
            {...{
              author: data.author,
              subreddit: data.subreddit_name_prefixed,
              thumbnail: data.thumbnail,
              title: data.title,
              score: data.score,
              icon_img: data.sr_detail.icon_img
            }} />)
      })}

      <div ref={bottomOfList} />

      {loading &&
        <div className={styles.loader_block}>
          <div className={styles.loader}></div>
        </div>
      }

      {btnFlag && (
        <button onClick={handleLoad} style={{ textAlign: 'center', color: '#CC6633', width: '100%' }}>Показать еще...</button>
      )}

      {error && (
        <div role='alert' style={{ textAlign: 'center' }}>
          {error}
        </div>
      )}
    </ul>
  );
}

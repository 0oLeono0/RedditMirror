import React, { useContext } from 'react';
import { Card } from './Card/Card';
import styles from './cardslist.css';
import { postContext } from '../context/postContext';

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
const postData = useContext(postContext);
  return (
    <ul className={styles.cardsList}>
      {postData.map(({data}:IPostData) => {
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
            }}          />)
      })}
    </ul>
  );
}

import React, { useContext } from 'react';
import { postContext } from '../context/postContext';
import { Card } from './Card/Card';
import styles from './cardslist.css';

export interface IPostData {
  data: {
    data: {
      id: string
      thumbnail: string
      title: string
      subreddit_name_prefixed: string
      score: number
      created_utc: number
      num_comments: number
      permalink: string
      url: string
      upvote_ratio: number
      sr_detail: {
        icon_img: string
      }
    }
  }
}

export function CardsList(data: IPostData) {
  const postData = useContext(postContext);
  console.log(data)

  return (
    <ul className={styles.cardsList}>
    </ul>
  );
}

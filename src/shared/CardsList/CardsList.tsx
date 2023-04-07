import React, { useContext } from 'react';
import { Card } from './Card/Card';
import styles from './cardslist.css';
import { postContext } from '../context/postContext';

export interface IPostData {
  data: {
    id: string
    author: string
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
          key = {data.id}
          {...
            {
              author: data.author,
              thumbnail: data.thumbnail,
              title: data.title,
              score: data.score,
              icon_img: data.sr_detail.icon_img
            }
          }
          />)
      })}
    </ul>
  );
}

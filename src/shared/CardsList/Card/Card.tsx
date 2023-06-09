import React from 'react';
import styles from './card.css';
import { Controls } from './Controls';
import { Menu } from './Menu';
import { Preview } from './Preview';
import { TextContent } from './TextContent';

export interface ICardProps {
  postID: string
  author: string
  subreddit: string
  thumbnail?: string
  title?: string
  score: number
  created?: string
  icon_img?: string
}
export function Card(props: ICardProps) {
  const {thumbnail, score, subreddit, postID} = props
  return (
    <li className={styles.card}>
      <TextContent {...props} />
      <Preview  {...{thumbnail}}/>
      <Menu />
      <Controls {...{score}}/>
    </li>
  );
}
